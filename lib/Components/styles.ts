import {
  compose,
  // layout
  space,
  display,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  verticalAlign,
  //flex
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  flex,
  flexWrap,
  flexBasis,
  flexDirection,
  justifySelf,
  alignSelf,
  order,
  // typo
  fontSize,
  fontWeight,
  textAlign,
  letterSpacing,
  lineHeight,
  // position
  position as positionStyle,
  top,
  left,
  right,
  bottom,
  DisplayProps,
  SpaceProps,
  WidthProps,
  HeightProps,
  MaxWidthProps,
  MinWidthProps,
  MinHeightProps,
  MaxHeightProps,
  FlexProps,
  AlignItemsProps,
  AlignContentProps,
  JustifyContentProps,
  JustifyItemsProps,
  FlexWrapProps,
  FlexBasisProps,
  FlexDirectionProps,
  JustifySelfProps,
  AlignSelfProps,
  OrderProps,
  FontSizeProps,
  FontWeightProps,
  TextAlignProps,
  VerticalAlignProps,
  LetterSpacingProps,
  LineHeightProps,
  PositionProps as PosProps,
  TopProps,
  LeftProps,
  RightProps,
  BottomProps,
} from 'styled-system'
import { mergeRight, path } from 'ramda'
import { tint, shade } from 'polished'
import { FlexWrapProperty } from 'csstype'

export type LayoutProps = SpaceProps &
  WidthProps &
  MinWidthProps &
  MaxWidthProps &
  HeightProps &
  MinHeightProps &
  MaxHeightProps &
  DisplayProps
export const layout: (props: LayoutProps) => any = compose(
  space,
  display,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  verticalAlign,
  width,
)

export type FlexBoxProps = FlexProps &
  AlignItemsProps &
  AlignContentProps &
  JustifyContentProps &
  JustifyItemsProps &
  FlexWrapProps &
  FlexBasisProps &
  FlexDirectionProps &
  JustifySelfProps &
  AlignSelfProps &
  OrderProps
export const flexBox: (props: FlexBoxProps) => any = compose(
  () => ({ display: 'flex' }),
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  flex,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
)

export type TypographyProps = FontSizeProps &
  FontWeightProps &
  TextAlignProps &
  VerticalAlignProps &
  LetterSpacingProps &
  LineHeightProps
export const typography: (props: TypographyProps) => any = compose(
  fontSize,
  fontWeight,
  textAlign,
  verticalAlign,
  letterSpacing,
  lineHeight,
)

export type PositionProps = PosProps &
  LeftProps &
  RightProps &
  TopProps &
  BottomProps
export const position: (props: PositionProps) => any = compose(
  positionStyle,
  top,
  left,
  right,
  bottom,
)

type ColorStyles = {
  backgroundColor: void | string
  color: void | string
}

const withValidColor = (fn: (color: string) => string) => (
  color: void | string,
) => {
  if (!color || color === 'transparent') return color
  return fn(color)
}
export const interactiveColor = <Props extends { disabled?: boolean }>(
  fn: (props: Props) => ColorStyles,
) => {
  return (props: Props) => {
    const { color, backgroundColor } = fn(props)
    const hover = withValidColor(tint(0.3))
    const active = withValidColor(shade(0.3))
    return {
      color,
      backgroundColor: props.disabled
        ? hover(backgroundColor)
        : backgroundColor,
      transition: 'color .2s ease, background-color .2s ease',
      outline: 'none',
      ':hover': {
        backgroundColor: hover(backgroundColor),
      },
      ':active': {
        backgroundColor: active(backgroundColor),
      },
    }
  }
}

export const outline = <
  Props extends {
    borderRadius?: number | ((props: Props) => void | number)
    noOutline?: boolean
    theme: any
  }
>({
  borderRadius,
  focus = true,
  prop,
}: {
  borderRadius?: number | ((props: Props) => void | number)
  focus?: boolean
  prop?: string
} = {}) => {
  return (props: Props) => {
    let {
      theme: { colors },
    } = props
    let br: number | void
    let focusStyle: Object | void
    let outlineStyle: Object | void
    if (typeof borderRadius === 'number') br = borderRadius
    else if (typeof borderRadius === 'function') br = borderRadius(props)
    if (typeof props.borderRadius === 'number') br = props.borderRadius
    else if (props.borderRadius && typeof props.borderRadius === 'function')
      br = props.borderRadius(props)

    if (focus)
      focusStyle = {
        '::before': {
          borderColor: 'Highlight',
        },
      }

    if (!props.noOutline)
      outlineStyle = {
        content: '" "',
        display: 'block',
        position: 'absolute',
        top: -3,
        bottom: -3,
        left: -3,
        right: -3,
        borderRadius: br ? br + 3 : 3,
        border: 'transparent 3px solid',
        borderColor:
          prop && props[prop]
            ? typeof props[prop] === 'string'
              ? colors[props[prop]] || props[prop]
              : 'Highlight'
            : 'transparent',
        transition: 'border-color .2s ease',
        pointerEvents: 'none',
        zIndex: 100,
      }

    return {
      position: 'relative',
      borderRadius: br,
      border: 'transparent solid 1.5px',
      '::before': outlineStyle,
      ':focus': focusStyle,
    }
  }
}

const callOrReturn = <Props>(
  fn: Object | ((props: Props) => Object),
  props: Props,
) => (typeof fn === 'function' ? fn(props) : fn)

export const customize = <Props>(
  name: string,
  base?: Object | ((props: Props) => Object),
) => {
  const getCustomization = path(['theme', name])
  return (props: Props) => {
    const customization = getCustomization(props)
    const customizedStyles = callOrReturn(customization || {}, props)
    const baseStyles = callOrReturn(base || {}, props)
    return mergeRight(baseStyles, customizedStyles)
  }
}
