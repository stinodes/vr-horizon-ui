// @flow
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
} from 'styled-system'
import { mergeRight, path } from 'ramda'
import { tint, shade } from 'polished'

export const layout = compose(
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
export const flexBox = compose(
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
export const typography = compose(
  fontSize,
  fontWeight,
  textAlign,
  verticalAlign,
  letterSpacing,
  lineHeight,
)

export const position = compose(
  positionStyle,
  top,
  left,
  right,
  bottom,
)

type ColorStyles = {
  backgroundColor: ?string,
  color: ?string,
}

const withValidColor = (fn: string => string) => (color: ?string) => {
  if (!color || color === 'transparent') return color
  return fn(color)
}
export const interactiveColor = <Props: { disabled?: boolean }>(
  fn: Props => ColorStyles,
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
        // color: hover(color),
        backgroundColor: hover(backgroundColor),
      },
      ':active': {
        // color: active(color),
        backgroundColor: active(backgroundColor),
      },
    }
  }
}

export const outline = <
  Props: { borderRadius?: number, noOutline?: boolean, theme: any },
>({
  borderRadius,
  focus = true,
  prop,
}: {
  borderRadius?: ?number | (Props => ?number),
  focus?: boolean,
  prop?: string,
} = {}) => {
  return (props: Props) => {
    let {
      theme: { colors },
    } = props
    let br
    let focusStyle
    let outlineStyle
    if (typeof borderRadius === 'number') br = borderRadius
    else if (typeof borderRadius === 'function') br = borderRadius(props)
    if (typeof props.borderRadius === 'number') br = props.borderRadius
    else if (typeof props.borderRadius === 'function')
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

const callOrReturn = <Props>(fn: Object | (Props => Object), props: Props) =>
  typeof fn === 'function' ? fn(props) : fn

export const customize = <Props>(
  name: string,
  base?: Object | (Props => ?Object),
) => {
  const getCustomization = path(['theme', name])
  return (props: Props) => {
    const customization = getCustomization(props)
    const customizedStyles = callOrReturn(customization || {}, props)
    const baseStyles = callOrReturn(base || {}, props)
    return mergeRight(baseStyles, customizedStyles)
  }
}
