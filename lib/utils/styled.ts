import _styled, {
  CreateStyled,
  StyledComponent as _StyledComponent,
} from '@emotion/styled'
import { path, split } from 'ramda'
import { Theme } from '../theme'
import { transparentize } from 'polished'

export const getColor = (color: string, theme: Theme): string => {
  const colorStr: null | undefined | string = path(
    split('.', color),
    theme.colors,
  )
  if (!colorStr) return color
  return colorStr
}

export const getBoxShadow = (
  color: string = 'darks.2',
  position: string = 'bottom',
  theme: Theme,
): string => {
  return `${transparentize(0.9, getColor(color, theme))} 0 ${
    position === 'top' ? -8 : 8
  }px 24px`
}

export const styled = _styled as CreateStyled<Theme>
export type StyledComponent<Inner, Outer> = _StyledComponent<
  Inner,
  Outer,
  Theme
>
