import React, {
  ReactNode,
  ReactElement,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from 'react'
import { layout } from 'styled-system'
import { Flex } from './Flex'
import { styled, StyledComponent } from '../utils'
import { outline } from './styles'

const OutlineComp: StyledComponent<
  ComponentPropsWithRef<typeof Flex>,
  { show?: boolean; outlineColor?: string; borderRadius?: number }
> = styled(Flex)(
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
}: ComponentPropsWithoutRef<typeof OutlineComp> & {
  render?: (focused?: boolean) => ReactNode
}) => {
  const [isFocused, setFocused] = React.useState(false)
  const child = React.Children.only(children) as ReactElement
  return (
    <OutlineComp show={isFocused || show} outlineColor={color} {...props}>
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
