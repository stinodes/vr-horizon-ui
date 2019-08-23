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
import { useTable, Column, Row as RowType } from 'react-table'
import { useSticky } from '../Hooks'
import { Text, TextProps } from './Text'
import { Flex } from './Flex'
import { Spinner } from './Spinner'
import { Button } from './Button'
import { styled, getColor } from '../utils'

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

type NoDataProps = {
  emptyLabel: string
  emptyAction?: ReactElement<typeof EmptyAction>
}

export const TableElement = styled('table')<{
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

type ExtendedRowProps = {
  row: RowType
  component?: ComponentType<any>
  render?: (props: { row: RowType }) => ReactNode
  children?: ReactNode
}
export const ExtendedRow = ({
  row,
  component: Comp,
  render,
  children,
  ...props
}: ExtendedRowProps) => {
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

export const HoverRow = ({ row, ...props }: { row: RowType }) => (
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
  columns: Column<Data, any>[]
  rowComponent?: ComponentType<{ row: RowType } & {}>
  renderRow?: (props: RowType) => ReactNode
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
  const table = useTable({ data, columns, ...props })
  const stickyRef = useRef<null | HTMLTableSectionElement>(null)
  const { stickyStyles } = useSticky({
    stickyRef,
  })

  const renderRow = (row: RowType) => {
    table.prepareRow(row)

    if (customRenderRow) {
      return customRenderRow(row)
    }

    const Row = rowComponent
    const arg = { ...row.getRowProps(), ...rowProps }
    return <Row {...arg} key={row.index} row={row} />
  }

  return (
    <Fragment>
      <TableElement {...table.getTableProps()} width={1}>
        <THead ref={stickyRef} css={headerStyle}>
          <Row {...table.headerGroups[0].getHeaderGroupProps()} {...rowProps}>
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
              <Text css={{ paddingBottom: 16 }} fontSize={16} color="darks.3">
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
        <div
          css={
            {
              ...stickyStyles,
              top: stickyStyles.top + stickyOffset,
            } as CSSObject
          }>
          <TableElement width={1}>
            <THead css={headerStyle}>
              <Row
                {...table.headerGroups[0].getHeaderGroupProps()}
                {...rowProps}>
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
    </Fragment>
  )
}

export const Table = <Data extends {}>(props: Props<Data>) => (
  <EmptyTable {...props} rowComponent={ExtendedRow} />
)
