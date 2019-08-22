//@jsx jsx
import { jsx } from '@emotion/core'
import { compose, prop, path, split, isEmpty } from 'ramda'
import React, { ReactNode, Ref, ComponentType, ReactElement } from 'react'
import { space, width, height } from 'styled-system'
import {
  useColumns,
  useRows,
  useSortBy,
  useFlexLayout,
  useExpanded,
  useTable,
} from 'react-table'
import { useSticky } from '../Hooks'
import { Text, TextProps } from './Text'
import { Flex } from './Flex'
import { Icon } from './Icons'
import { Spinner } from './Spinner'
import { Button } from './Button'
import { styled, getColor } from '../utils'

type Column<Data> = {
  Header: null | string | (() => ReactNode)
  Cell: (props: TableCellType<Data> & Object) => ReactNode
  Filter?: (props: Object) => ReactNode
  id?: string
  accessor: string | ((props: Data) => any)
  minWidth?: number
  maxWidth?: number
}
type TableCellType<Data> = {
  column: Column<Data>
  getCellProps: () => Object
  render: (name: string, props?: Object) => React.ReactNode
}
export type TableRowType<Data> = {
  original: Data
  index: number
  getRowProps: () => Object
  cells: TableCellType<Data>[]
}

type NoDataProps = {
  emptyLabel: string
  emptyAction?: ReactElement<typeof EmptyAction>
}

export const TableElement = styled('table')(width, height)
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

export const Row = styled('tr')(space, ({ theme: { colors } }) => ({
  borderBottom: '1px solid transparent',
  //borderBottomColor: colors.lights[2],
}))

const _Cell = React.forwardRef(
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
  },
  ({ theme, color, fontWeight }) => ({
    fontWeight,
    color: getColor(color || 'darks.2', theme),
  }),
)

type ExtendedRowProps<Data> = {
  row: TableRowType<any>
  component?: ComponentType<any>
  render?: (props: { row: TableRowType<Data> }) => ReactNode
  children?: ReactNode
}
export const ExtendedRow = <Data extends {}>({
  row,
  component: Comp,
  render,
  children,
  ...props
}: ExtendedRowProps<Data>) => {
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

type Props<Data> = {
  data: Data[]
  rowProps?: Object
  loading: boolean
  getId?: (data: Data) => number | string
  leaveDelay?: number
  headerStyle?: {}
  disableSticky?: boolean
  stickyOffset?: number
  columns: Column<Data>[]
  rowComponent?: ComponentType<{ row: TableRowType<Data> } & {}>
  renderRow?: (props: TableRowType<Data>) => ReactNode
} & NoDataProps

export const EmptyAction = (props: {
  children: ReactNode
  onClick?: () => any
  to?: string
}) => <Button color="primary" {...props} />

export const EmptyTable = <Data extends {}>({
  data,
  loading,
  getId,
  leaveDelay = 0,
  emptyLabel,
  emptyAction,
  rowProps,
  columns,
  rowComponent = ExtendedRow,
  renderRow: customRenderRow,
  disableSticky,
  stickyOffset = 0,
  headerStyle = {},
  ...props
}: Props<Data>) => {
  const table = useTable(
    { data, columns, ...props },
    useColumns,
    useRows,
    useSortBy,
    useFlexLayout,
    useExpanded,
  )

  const stickyRef = React.useRef()
  const { stickyStyles } = useSticky({
    stickyRef,
  })

  const renderRow = row => {
    table.prepareRow(row)

    if (customRenderRow) {
      return customRenderRow(row)
    }

    const Row = rowComponent
    const arg = { ...row.getRowProps(), ...rowProps }
    return <Row {...arg} key={row.index} row={row} />
  }

  return (
    <>
      <TableElement {...table.getTableProps()} width={1}>
        <THead ref={stickyRef} css={headerStyle}>
          <Row {...table.headerGroups[0].getRowProps()} {...rowProps}>
            {table.headers.map(header => (
              <TableHeader {...header.getHeaderProps()}>
                {header.render('Header')}
                {header.render('Filter')}
              </TableHeader>
            ))}
          </Row>
        </THead>
        <TBody>
          {!loading && isEmpty(table.rows) && (
            <Flex
              py={3}
              flexDirection="column"
              alignItems="center"
              justifyContent="center">
              <Text css={{ paddingBottom: 16 }} size="small" color="darks.3">
                {emptyLabel}
              </Text>
              {emptyAction}
            </Flex>
          )}
          {table.rows.map(row => renderRow(row))}
          {loading && (
            <Flex justifyContent="center">
              <Spinner color="blues.2" />
            </Flex>
          )}
        </TBody>
      </TableElement>
      {!disableSticky && stickyStyles && (
        <div css={{ ...stickyStyles, top: stickyStyles.top + stickyOffset }}>
          <TableElement width={1}>
            <THead css={headerStyle}>
              <Row {...table.headerGroups[0].getRowProps()} {...rowProps}>
                {table.headers.map(header => (
                  <TableHeader {...header.getHeaderProps()}>
                    {header.render('Header')}
                    {header.render('Filter')}
                  </TableHeader>
                ))}
              </Row>
            </THead>
          </TableElement>
        </div>
      )}
    </>
  )
}

export const Table = <Data extends {}>(props: Props<Data>) => (
  <EmptyTable {...props} rowComponent={ExtendedRow} />
)
