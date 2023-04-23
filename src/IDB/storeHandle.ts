import { getDate } from '@/utils/tools'
import type {
  PagingValue,
  StoreAllValue,
  StoreHandleProps,
  GetPageDataOptions,
  StoreHandles,
} from './interface'

/** 数据表操作方法 */
export class StoreHandle {
  /** 实例化参数 */
  props = {} as StoreHandleProps

  constructor(props: StoreHandleProps) {
    this.props = props
  }

  /** 获取数据表可操作的方法 */
  get storeHandles(): StoreHandles.Handles {
    return {
      myIcons: {
        add: data => this.createData('myIcons', data),
        get: query => this.getPageData('myIcons', { query }),
        getAll: () => this.getStoreAllData('myIcons'),
      },
    }
  }

  /** 获取所有数据 */
  async getStoreAllData(storeName) {
    const store: IDBObjectStore = await this.getObjectStore(storeName)
    const data: StoreAllValue = { total: 0, list: [] }

    return await new Promise<StoreAllValue>(resolve => {
      store.getAll().onsuccess = e => {
        const { result } = e.target as IDBRequest
        data.total = result.length
        data.list = result
        resolve(data)
      }
    })
  }

  /** 获取分页数据 */
  async getPageData(storeName, options: GetPageDataOptions) {
    const { query, indexName = 'keyword', direction = 'prev' } = options
    const store: IDBObjectStore = await this.getObjectStore(storeName)
    const { pageNo, pageSize, keyword = '' } = query
    const [startPage, endPage] = [(pageNo - 1) * pageSize, pageNo * pageSize]
    const data: PagingValue = { pages: 0, total: 0, list: [] }
    let advanced = false
    let index = 0

    await new Promise<void>(resolve => {
      store.count().onsuccess = e => {
        const { result } = e.target as IDBRequest
        data.pages = Math.ceil(result / pageSize)
        data.total = result
        resolve()
      }
    })

    return new Promise<PagingValue>(resolve => {
      const queryStore = indexName === null ? store : store.index(indexName)

      queryStore.openCursor(null, direction).onsuccess = e => {
        const { result } = e.target as IDBRequest

        if (!advanced && startPage) {
          advanced = true
          result.advance(startPage)
        } else if (index < endPage && result) {
          const { value, key } = result
          if (`${key}`.indexOf(keyword) !== -1) {
            index++
            data.list.push(value)
          }
          result.continue()
        } else {
          resolve(data)
        }
      }
    })
  }

  /** 新建数据添加公共字段 */
  getCreateData(data) {
    const id = Date.now()
    return { id: id.toString(), createDate: getDate({ time: id, full: true }), ...data }
  }

  /** 向数据表新增数据 */
  async createData(storeName, data) {
    const store = await this.getObjectStore(storeName)
    const addData = Array.isArray(data) ? data.pop() : data
    const request = store.add(this.getCreateData(addData))

    return new Promise<boolean>((resolve, reject) => {
      request.onsuccess = () => {
        if (data.length) this.createData(storeName, data)
        resolve(true)
      }
      request.onerror = reject
    })
  }

  /** 检查数据表是否准备完毕 */
  inspectStoreMounted = async () => {
    return new Promise<void>(resolve => {
      const inspectTimer = setInterval(() => {
        const { db } = this.props
        if (!db.dbReady) return
        clearInterval(inspectTimer)
        resolve()
      }, 5)
    })
  }

  /** 获取数据表对象容器 */
  async getObjectStore(storeName) {
    await this.inspectStoreMounted()
    const { db } = this.props
    return db.dataBase.transaction([storeName], 'readwrite').objectStore(storeName)
  }
}
