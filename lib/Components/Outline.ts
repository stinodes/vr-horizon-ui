// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { Flex } from './Container'
import { outline, layout } from './styles'

const OutlineComp = styled(Flex)(
  outline({
    prop: 'outline',
    focus: false,
    borderRadius: ({ borderRadius }) => borderRadius,
  }),
  layout,
)
const Outline = ({
  children,
  render,
  outline,
  ...props
}: {
  children: React.Node,
  render?: boolean => React.Node,
  outline?: boolean | string,
  borderRadius?: number,
}) => {
  const [isFocused, setFocused] = React.useState(false)
  const child = React.Children.only(children)
  return (
    <OutlineComp outline={isFocused || outline} {...props}>
      {React.cloneElement(child, {
        onFocus: e => {
          setFocused(true)
          child.props.onFocus && child.props.onFocus(e)
        },
        onBlur: e => {
          setFocused(false)
          child.props.onBlur && child.props.onBlur(e)
        },
      })}
      {render && render(isFocused)}
    </OutlineComp>
  )
}

export { Outline }
