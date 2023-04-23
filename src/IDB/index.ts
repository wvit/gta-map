import { StoreHandle } from './storeHandle'
import type { DbConfig, CreateStoreData, DeleteStoreData } from './interface'

export class Db {
  constructor(config) {
    this.config = config
    this.initDbRequest()
  }

  /** 数据库配置 */
  config: DbConfig

  /** indexedDB实例 */
  dbRequest?: IDBOpenDBRequest

  /** 数据库 */
  dataBase: IDBDatabase = {} as IDBDatabase

  /** 数据 */
  dbReady = false

  /** 当前需要创建的数据表 */
  createStoreData: null | CreateStoreData = null

  /** 需要删除的数据表名称 */
  deleteStoreData: null | DeleteStoreData = null

  /** 初始化IDBOpenDBRequest */
  initDbRequest() {
    const { name } = this.config
    this.dbRequest = indexedDB.open(name)

    /** 每次数据库version升级事件 */
    this.dbRequest.onupgradeneeded = e => {
      const { result } = e?.target as IDBOpenDBRequest

      /** 保存打开数据库的结果 */
      this.dataBase = result

      /** 判断当前是否有需要创建的数据表 */
      if (this.createStoreData) {
        const { storeName, options, indexs = [] } = this.createStoreData
        const objectStore = result.createObjectStore(storeName, options)

        indexs.forEach(item => {
          const { indexName, fieldName, params } = item
          /** 创建索引配置，方便后续查询 */
          objectStore.createIndex(indexName, fieldName, params)
        })

        /** 创建完成后，清空当前创建数据表配置 */
        this.createStoreData = null
      }

      /** 判断当前是否有需要删除的数据表 */
      if (this.deleteStoreData) {
        const { storeName } = this.deleteStoreData
        result.deleteObjectStore(storeName)

        /** 删除完成后，清空当前删除数据表配置 */
        this.deleteStoreData = null
      }
    }

    /** 数据库打开成功事件 */
    this.dbRequest.onsuccess = async e => {
      const { result } = e?.target as IDBOpenDBRequest

      /** 保存打开数据库的结果 */
      this.dataBase = result

      await this.createObjectStore({
        storeName: 'myIcons',
        options: { keyPath: 'id' },
      })

      /** 设置一个状态，告诉其他地方，数据库已准备就绪 */
      this.dbReady = true
    }
  }

  /** 创建数据表 */
  createObjectStore = async storeData => {
    const status = await this.handleObjectStore(storeData)
    console.log(1111, status)
    if (status) this.createStoreData = storeData
  }

  /** 删除数据表 */
  deleteObjectStore = async storeData => {
    const status = await this.handleObjectStore(storeData)
    if (status) this.deleteStoreData = storeData
  }

  /** 操作数据库公共逻辑 */
  handleObjectStore = async storeData => {
    return new Promise(resolve => {
      if (!this.dbRequest) return resolve(false)
      const { name } = this.config
      const { result, onsuccess, onupgradeneeded } = this.dbRequest
      const { objectStoreNames, version } = result
      const { storeName } = storeData

      /** 判断数据表是否存在 */
      if (!objectStoreNames.contains(storeName)) return resolve(false)

      this.dataBase.close()
      this.dbRequest = indexedDB.open(name, version + 1)
      this.dbRequest.onsuccess = onsuccess
      this.dbRequest.onupgradeneeded = onupgradeneeded
      resolve(true)
    })
  }
}

/** 数据表的操作 */
export const { storeHandles } = new StoreHandle({ db: new Db({ name: 'map-data-base' }) })
