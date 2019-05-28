// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { color, opacity } from 'styled-system'
import { Grid, Col, Flex } from './Container'
import { Text } from './Text'

const Divider = styled('div')(
  {
    height: 1,
  },
  color,
  opacity,
)

type Context = {
  columns: number,
}
const TableContext = React.createContext<Context>({
  columns: 0,
})
const useTableContext = () => React.useContext(TableContext)
export const useColumns = () => useTableContext().columns

type ChildrenProps = {
  children: React.Node,
}
type TableProps = {
  columns: number,
  children: React.Node,
}
export const Table = ({ columns, ...props }: TableProps) => {
  const value = { columns }
  return (
    <TableContext.Provider value={value}>
      <Grid {...props} gutter={3} />
    </TableContext.Provider>
  )
}

export const Row = (props: { last?: boolean } & ChildrenProps) => {
  return (
    <Flex flexDirection="column" position="relative">
      <Flex flexDirection="row">{props.children}</Flex>
      {props.last || (
        <Col gutter={3} w={1}>
          <Divider bg="lights.2" />
        </Col>
      )}
    </Flex>
  )
}
export const CellContainer = (props: ChildrenProps) => {
  const { columns } = useTableContext()
  return (
    <Col
      as={Flex}
      style={{ display: 'flex' }}
      width={1 / columns}
      justifyContent="center"
      gutter={2}
      py={2}
      {...props}
    />
  )
}
export const ColumnHeader = ({ children, ...props }: ChildrenProps) => {
  return (
    <CellContainer {...props} alignItems="flex-end">
      <Text fontSize={14} fontWeight="700">
        {children}
      </Text>
    </CellContainer>
  )
}
