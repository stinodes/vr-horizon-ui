// @flow
//@jsx jsx
import { jsx } from '@emotion/core'
import { compose, prop, path, split, isEmpty } from 'ramda'
import * as React from 'react'
import styled from '@emotion/styled'
import { space } from 'styled-system'
import { useTransition, animated } from 'react-spring'
import {
  useColumns,
  useRows,
  useSortBy,
  useFlexLayout,
  useExpanded,
  useTable,
} from 'react-table'
import { width, height } from 'styled-system'
import { Text } from './Text'
import { Flex } from './Container'
import { Icon } from './Icons'
import { Spinner } from './Spinner'
import { Button } from './Button'

export const TableElement = styled('table')(width, height)
export const THead = styled('thead')()

const _Header = ({ children, ...props }: { children: React.Node }) => (
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
    fontWeight: '600',
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
  ({ children, ...props }: { children: React.Node }, ref) => (
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
export const CellText = styled(Text)(
  {
    fontSize: 15,
    lineHeight: 1.33,
    letterSpacing: -0.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingRight: 8,
  },
  ({ theme: { colors }, color, fontWeight }) => ({
    fontWeight,
    color: color
      ? path(split('.', color), colors) || colors.darks[2]
      : colors.darks[2],
  }),
)

export const HoverRow = <Data>({
  row,
  ...props
}: {
  row: TableRowType<Data>,
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

type Column<Data> = {
  Header: void | string | (() => React.Node),
  Cell: (TableCellType<Data> & Object) => React.Node,
  Filter?: Object => React.Node,
  id?: string,
  accessor: string | (any => any),
  minWidth?: number,
  maxWidth?: number,
}
type TableCellType<Data> = {
  column: Column<Data>,
  getCellProps: () => Object,
  render: (string, ?Object) => React.Node,
}
export type TableRowType<Data> = {
  original: Data,
  index: number,
  getRowProps: () => Object,
  cells: TableCellType<Data>[],
}

type NoDataProps = {
  emptyLabel: string,
  emptyAction?: React.Element<typeof EmptyAction>,
}
type Props<Data> = {
  data: Data[],
  rowProps?: Object,
  loading: boolean,
  getId?: Object => number | string,
  leaveDelay?: number,
  // $FlowFixMe
  columns: Column<Data>[],
  rowComponent: React.ComponentType<{ row: TableRowType<Data> }>,
} & NoDataProps

export const EmptyAction = (props: {
  children: React.Node,
  onClick?: () => any,
  to?: string,
}) => <Button colortype="secondary" {...props} />

export const EmptyTable = <Data: {}>({
  data,
  loading,
  getId,
  leaveDelay = 0,
  emptyLabel,
  emptyAction,
  hasMore,
  loadMore,
  rowProps,
  columns,
  rowComponent,
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

  const renderRow = row => {
    const Row = rowComponent
    table.prepareRow(row)
    const arg = { ...row.getRowProps(), ...rowProps }
    return <Row {...arg} key={row.index} row={row} />
  }

  const transitions = useTransition(
    table.rows,
    getId
      ? compose(
          getId,
          prop('values'),
        )
      : prop('index'),
    {
      trail: 200,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: item => async next => {
        await new Promise(resolve => setTimeout(resolve, leaveDelay))
        await next({ opacity: 0 })
      },
    },
  )

  return (
    <>
      <TableElement {...table.getTableProps()} width={1}>
        <THead>
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
          {!loading && isEmpty(transitions) && (
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
          {transitions.map(
            ({ item, props, key }, i) =>
              item && (
                <animated.div key={key} style={props}>
                  {renderRow(item)}
                </animated.div>
              ),
          )}
          {loading && (
            <Flex justifyContent="center">
              <Spinner color="blues.2" />
            </Flex>
          )}
        </TBody>
      </TableElement>
    </>
  )
}
const FilledRow = ({ row, ...props }) => (
  <Row {...props}>
    {row.cells.map(cell => (
      <Cell {...cell.getCellProps()}>{cell.render('Cell')}</Cell>
    ))}
  </Row>
)
export const Table = <Data: {}>(
  props: $Diff<Props<Data>, { rowComponent: any }>,
) => <EmptyTable {...props} rowComponent={FilledRow} />