import { BackgroundColorProperty, ColorProperty } from 'csstype'
import { tint, shade } from 'polished'
import { Theme } from '../theme'

const withValidColor = (fn: (color: string) => string) => (
  color: void | string,
) => {
  if (!color || color === 'transparent') return color
  return fn(color)
}
export const interactiveColor = <Props extends { disabled?: boolean }>(
  fn: (
    props: Props,
  ) => { backgroundColor: BackgroundColorProperty; color: ColorProperty },
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
    borderRadius?: number | ((props: Props) => null | number)
    noOutline?: boolean
    theme: Theme
  }
>({
  borderRadius,
  focus = true,
  prop,
}: {
  borderRadius?: number | ((props: Props) => null | number)
  focus?: boolean
  prop?: string
} = {}) => {
  return (props: Props) => {
    let {
      theme: { colors },
    } = props
    let br: number | null
    let focusStyle: Object | null
    let outlineStyle: Object | null
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
