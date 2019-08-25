import React, { forwardRef, Ref, HTMLAttributes, ComponentType } from 'react'
import { FlexProps, Flex } from './Flex'

const MaxWidthBox: ComponentType<
  FlexProps & HTMLAttributes<HTMLDivElement>
> = forwardRef((props: FlexProps, ref: Ref<HTMLDivElement>) => (
  <Flex
    ref={ref}
    px={{ sm: 5, lg: 140 }}
    maxWidth={1640}
    width={1}
    mx="auto"
    flexDirection="column"
    {...props}
  />
))
MaxWidthBox.displayName = 'MaxWidthBox'
export { MaxWidthBox }
