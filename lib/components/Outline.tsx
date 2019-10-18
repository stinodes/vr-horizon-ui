import React, { ReactNode, ReactElement } from 'react'
import { layout } from 'styled-system'
import { prop } from 'ramda'
import { Flex, FlexProps } from './Flex'
import { styled } from '../utils'
import { outline } from './styles'

const OutlineComp = styled(Flex)<
  FlexProps & { show?: boolean; color?: string; borderRadius?: number }
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
  show,
  color,
  ...props
}: {
  children: ReactNode
  render?: (focus: boolean) => ReactNode
  color?: string
  show?: boolean
  borderRadius?: number
} & FlexProps) => {
  const [isFocused, setFocused] = React.useState(false)
  const child = React.Children.only(children) as ReactElement
  return (
    <OutlineComp show={isFocused || show} color={color} {...props}>
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
