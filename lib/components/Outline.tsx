import React, { ReactNode, ReactElement } from 'react'
import { layout } from 'styled-system'
import { prop } from 'ramda'
import { Flex, FlexProps } from './Flex'
import { styled } from '../utils'
import { outline } from './styles'

const OutlineComp = styled(Flex)<
  FlexProps & { outline?: string | boolean; borderRadius?: number }
>(
  outline({
    focus: false,
    borderRadius: (props: { borderRadius?: any }) =>
      props.borderRadius as number,
  }),
  layout,
)
const Outline = ({
  children,
  render,
  outline,
  ...props
}: {
  children: ReactNode
  render?: (focus: boolean) => ReactNode
  outline?: boolean | string
  borderRadius?: number
} & FlexProps) => {
  const [isFocused, setFocused] = React.useState(false)
  const child = React.Children.only(children) as ReactElement
  return (
    <OutlineComp outline={isFocused || outline} {...props}>
      {React.cloneElement(child, {
        onFocus: (e: Event) => {
          setFocused(true)
          child.props.onFocus && child.props.onFocus(e)
        },
        onBlur: (e: Event) => {
          setFocused(false)
          child.props.onBlur && child.props.onBlur(e)
        },
      })}
      {render && render(isFocused)}
    </OutlineComp>
  )
}

export { Outline }
