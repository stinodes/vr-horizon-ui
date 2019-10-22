import React, { forwardRef, Ref, ComponentPropsWithRef } from 'react'
import { Flex } from './Flex'

const MaxWidthBox = forwardRef(
  (props: ComponentPropsWithRef<typeof Flex>, ref: Ref<HTMLDivElement>) => (
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
MaxWidthBox.displayName = 'MaxWidthBox'
export { MaxWidthBox }
