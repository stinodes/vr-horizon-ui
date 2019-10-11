/** @jsx jsx */
import { forwardRef, Ref, ReactNode } from 'react'
import { jsx } from '@emotion/core'
import { FlexProps, Flex } from './Flex'

export const Grid = forwardRef<
  HTMLDivElement,
  { children?: ReactNode } & FlexProps
>((props, ref) => (
  <Flex ref={ref} flexWrap="wrap" css={{ overflowX: 'hidden' }} {...props} />
))
export const Col = forwardRef<
  HTMLDivElement,
  { children?: ReactNode } & FlexProps
>((props, ref) => <Flex ref={ref} {...props} />)
