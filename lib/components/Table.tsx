/** @jsx jsx */
import { jsx, CSSObject } from '@emotion/core'
import { isEmpty } from 'ramda'
import {
  Fragment,
  ReactNode,
  Ref,
  ComponentType,
  ReactElement,
  useRef,
  forwardRef,
} from 'react'
import { space, width, height, ResponsiveValue } from 'styled-system'
import { useSticky } from '../Hooks'
import { Text, TextProps } from './Text'
import { Flex } from './Flex'
import { Spinner } from './Spinner'
import { Button } from './Button'
import { styled, getColor } from '../utils'

type Column<Data, Value> = {
  Cell: (props: { row: TableRowType<Data>; value: Value }) => ReactNode
  Header: (props: { row: TableRowType<Data> }) => ReactNode
  id?: string
  accessor?: (data: Data) => Value
  minWidth?: number
  maxWidth?: number
}
type TableCellType<Data> = {
  column: Column<Data, any>
  getCellProps: () => Object
  render: (name: string, props?: Object) => React.ReactNode
}
export type TableRowType<Data> = {
  original: Data
  index: number
  getRowProps: () => Object
  cells: TableCellType<Data>[]
}

export const Table = styled('table')<{
  width?: ResponsiveValue<string | number>
  height?: ResponsiveValue<string | number>
}>(width, height)
export const THead = styled('thead')()

const _Header = ({ children, ...props }: { children: React.ReactNode }) => (
  <th {...props}>
    <div>{children}</div>
  </th>
)
export const TableHeader = styled(_Header)({
  '> div': {
    display: 'flex',
    alignItems: 'center',
    minHeight: 54,
  },
})
export const HeaderText = styled(Text)(
  {
    fontSize: 15,
    lineHeight: 1.33,
    letterSpacing: -0.2,
    fontWeight: 600,
  },
  ({ theme: { colors } }) => ({
    color: colors.darks[4],
  }),
)

export const TBody = styled('tbody')()

export const Row = styled('tr')(space, {
  borderBottom: '1px solid transparent',
  //borderBottomColor: colors.lights[2],
})

const _Cell = forwardRef(
  (
    { children, ...props }: { children: ReactNode },
    ref: Ref<HTMLTableCellElement>,
  ) => (
    <td {...props} ref={ref}>
      <div>{children}</div>
    </td>
  ),
)
export const Cell = styled(_Cell)({
  display: 'flex !important',
  flexDirection: 'column',
  '> div': {
    display: 'flex',
    alignItems: 'center',
    minHeight: 70,
  },
})
export const CellText = styled(Text)<TextProps>(
  {
    fontSize: 15,
    lineHeight: 1.33,
    letterSpacing: -0.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingRight: 8,
  } as CSSObject,
  ({ theme, color, fontWeight }) =>
    ({
      fontWeight,
      color: getColor(color || 'darks.2', theme),
    } as CSSObject),
)

type ExtendedRowProps<Data extends {}> = {
  row: TableRowType<Data>
  component?: ComponentType<any>
  render?: (props: { row: TableRowType<Data> }) => ReactNode
  children?: ReactNode
}
export const ExtendedRow = <Table extends {}>({
  row,
  component: Comp,
  render,
  children,
  ...props
}: ExtendedRowProps<Table>) => {
  let ch = children
  if (render) ch = render({ row, ...props })
  if (Comp) ch = <Comp {...props} row={row} />

  return (
    <Row {...props}>
      {row.cells.map(cell => (
        <Cell {...cell.getCellProps()}>{cell.render('Cell')}</Cell>
      ))}
      {children}
    </Row>
  )
}

export const HoverRow = <Data extends {}>({
  row,
  ...props
}: {
  row: TableRowType<Data>
}) => (
  <Row
    {...props}
    css={{
      '[data-row-hover-opacity]': {
        transition: 'opacity .2s ease',
        opacity: 0,
      },
      ':hover': {
        '[data-row-hover-opacity]': {
          opacity: 1,
        },
      },
    }}>
    {row.cells.map(cell => (
      <Cell {...cell.getCellProps()}>{cell.render('Cell')}</Cell>
    ))}
  </Row>
)
