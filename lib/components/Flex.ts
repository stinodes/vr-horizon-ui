import { styled } from '../utils'
import { Box, BoxProps } from './Box'
import { FlexboxProps, flexbox } from 'styled-system'

export type FlexProps = BoxProps & FlexboxProps
const Flex = styled(Box)<FlexProps>({ display: 'flex' }, flexbox)
Flex.displayName = 'Flex'
export { Flex }
