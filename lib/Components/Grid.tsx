/** @jsx jsx */
import { forwardRef, Ref } from 'react'
import { jsx } from '@emotion/core'
import { FlexProps, Flex } from './Flex'

export const Grid = forwardRef((props: FlexProps, ref: Ref<HTMLDivElement>) => (
  <Flex ref={ref} flexWrap="wrap" css={{ overflowX: 'hidden' }} {...props} />
))
export const Col = forwardRef((props: FlexProps, ref: Ref<HTMLDivElement>) => (
  <Flex ref={ref} {...props} />
))
