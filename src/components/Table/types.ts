export interface IPropList {
  prop: string
  label: string
  width?: string
  slotName?: string
}

export interface ITable {
  defaultQueryCondition?: any
  propList: IPropList[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  title?: string
  requestUrl: string
  showPagination?: boolean
}
