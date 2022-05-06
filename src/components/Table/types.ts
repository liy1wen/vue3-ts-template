export interface IPropList {
  prop: string
  label: string
  width?: string
  slotName?: string
  sortable?: boolean
}

export interface ITable {
  propList: IPropList[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  title?: string
  requestUrl: string
  showPagination?: boolean
  showExportBtn?: boolean
}
