import { ColDef, ColumnState, SortModelItem } from 'ag-grid-community'

export interface ITableParams {
    fetcher: Function
    quickSearch?: boolean
    quickSearchPlaceholder?: string
    columnDefs: ColDef[]
    defaultColDefs?: ColDef
    defaultSortModel?: SortModelItem
    possibleActions?: Function
    hideWhenEmpty?: boolean
    onRowClicked?: Function
}

export interface IFetchOptions {
    page_number: number
    per_page: number
    order_by?: string
    order_direction?: string
    search?: string
}

export interface IConfig {
    pageSize: number
    quickSearch: string
    columns?: ColumnState[]
    currentPage?: number
    filters?: IFilters[]
}

export interface IFilters {
    [name: string]: {
        filter: string
        filterType: string
        type: string
    }
}
