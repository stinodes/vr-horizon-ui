import _styled, { CreateStyled } from '@emotion/styled'
import { path, split } from 'ramda'
import { Theme } from '../theme'

export const getColor = (color: string, theme: Theme): string => {
  const colorStr: null | undefined | string = path(
    split('.', color),
    theme.colors,
  )
  if (!colorStr) return color
  return colorStr
}
export const styled = _styled as CreateStyled<Theme>
