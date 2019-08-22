import { styled } from '../utils'
import { Box, BoxProps } from './Box'
import { FlexboxProps, flexbox } from 'styled-system'

export type FlexProps = BoxProps & FlexboxProps
export const Flex = styled(Box)<FlexProps>(flexbox)
