import React, { forwardRef, Ref } from 'react'
import { FlexProps, Flex } from './Flex'

export const MaxWidthBox = forwardRef(
  (props: FlexProps, ref: Ref<HTMLDivElement>) => (
    <Flex
      ref={ref}
      px={{ sm: 5, lg: 140 }}
      maxWidth={1640}
      width={1}
      mx="auto"
      flexDirection="column"
      {...props}
    />
  ),
)
