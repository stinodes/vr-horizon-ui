import { styled, StyledComponent } from '../utils'
import { Box } from './Box'
import { FlexboxProps, flexbox } from 'styled-system'
import { ComponentPropsWithRef } from 'react'

const Flex: StyledComponent<
  ComponentPropsWithRef<typeof Box>,
  FlexboxProps
> = styled(Box)({ display: 'flex' }, flexbox)
Flex.displayName = 'Flex'
export { Flex }
