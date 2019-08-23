declare module 'react-table' {
  import { ReactNode } from 'react'

  type Plugin = () => any

  type Header = {
    render: (name: string) => ReactNode
    getHeaderProps: () => {}
  }
  type HeaderGroup = {
    getHeaderGroupProps: () => {}
    headers: Header[]
  }
  export type Column<Data, Value> = {
    id?: string
    accessor?: string | ((data: Data) => Value)
    Header: () => ReactNode
    Cell: (cell: { value: Value }) => ReactNode
  }
  type Cell = {
    render: (name: string) => ReactNode
    getCellProps: () => {}
  }
  export type Row = {
    getRowProps: () => {}
    cells: Cell[]
    index: number
  }

  export const useTable: <Data>(
    options: { data: Data[]; columns: Column<Data, any>[] },
    ...hooks: Plugin[]
  ) => {
    headerGroups: HeaderGroup[]
    headers: Header[]
    columns: Column<Data, any>[]
    rows: Row[]
    prepareRow: (row: Row) => void
    getTableProps: () => {}
  }
  export const useFlexLayout: Plugin
}
