/** @jsx jsx */
import { forwardRef, Ref, ReactNode } from 'react'
import { jsx } from '@emotion/core'
import { FlexProps, Flex } from './Flex'

export const Grid = forwardRef<
  HTMLDivElement,
  { gutter?: number; children?: ReactNode } & FlexProps
>(({ gutter = 2, ...props }, ref) => (
  <Flex
    ref={ref}
    flexWrap="wrap"
    css={{ overflowX: 'hidden' }}
    mx={typeof gutter === 'number' ? -gutter : undefined}
    {...props}
  />
))
Grid.displayName = 'Grid'

export const Col = forwardRef<
  HTMLDivElement,
  { gutter?: number; children?: ReactNode } & FlexProps
>(({ gutter = 2, ...props }, ref) => <Flex ref={ref} px={gutter} {...props} />)
Col.displayName = 'Col'
