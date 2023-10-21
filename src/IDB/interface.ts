import type { storeNames } from './config'
import type { Db } from './index'

/** 实例化数据表操作方法参数 */
export interface StoreHandleProps {
  /** 数据库实例 */
  db: Db
}

export namespace StoreHandles {
  /** 数据表 */
  export type Stores = (typeof storeNames)[number]

  /** 数据库暴露出去的操作方法 */
  export type Handles = Record<
    Stores,
    {
      /** 添加数据方法 */
      add: (data) => Promise<boolean>
      /** 获取查询条件的分页数据 */
      getPage: (query) => Promise<PagingValue>
      /** 获取查询条件的所有数据 */
      getAll: (query?) => Promise<StoreAllValue>
      /** 批量删除数据 */
      delete: (id: string) => Promise<boolean>
    }
  >
}

/** 实例化Db配置 */
export interface DbConfig {
  /** 数据库名称 */
  name: string
}

/** 查询 */
export interface Query {
  /** 页码 */
  pageNo: number
  /** 分页数量 */
  pageSize: number
  /** 搜索关键字 */
  keyword?: string
}

/** 查询的分页数据结果 */
export interface PagingValue<Item = any> {
  /** 总页数 */
  pages: number
  /** 总数 */
  total: number
  /** 查询到的分页结果 */
  list: Item[]
}

/** 所有数据 */
export interface StoreAllValue<Item = any> {
  /** 总数 */
  total: number
  /** 所有数据 */
  list: Item[]
}

/** 新建数据表 */
export interface CreateStoreData {
  /** 数据表名称 */
  storeName: string
  /** 数据表名称 */
  options?: IDBObjectStoreParameters
  /** 索引配置 */
  indexs?: {
    /** 索引名称 */
    indexName: string
    /** 索引对应字段 */
    fieldName: string | Iterable<string>
    /** 其他参数 */
    params?: IDBIndexParameters
  }[]
}

/** 删除数据表 */
export interface DeleteStoreData {
  /** 数据表名称 */
  storeName: string
}

/** 获取分页数据，option入参类型 */
export interface GetPageDataOptions {
  /** 查询条件 */
  query: Query
  /** 索引名称 */
  indexName?: null | string
  /** 数据排序 */
  direction?: IDBCursorDirection
}
