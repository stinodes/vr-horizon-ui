// @flow
import * as React from 'react'
import { mergeDeepRight } from 'ramda'
import { ThemeProvider as TP } from 'emotion-theming'
import { tint } from 'polished'

export const baseTheme = {
  colors: {
    white: '#FFF',
    lightGrey: '#f3f5f5',
    divider: '#e6e8e8',
    blackCoral: '#54626f',
    grey: '#c0c3c3',
    text: '#505659',
    lightBlue: 'rgb(144, 202, 250)',
    accent: '#0078e7',
    disabled: 'rgb(144, 202, 250)',
    error: '#FF4D80',
    fadedError: tint(0.7, '#FF4D80'),
    success: '#3DDC97',
    alert: '#FFE74C',
    overlay: 'rgba(130, 177, 255, 0.9)',
  },
  breakpoints: { sm: 0, md: '40em', lg: '64em', xlg: '80em' },
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
}

type ThemeProviderProps = {
  children: React.Node,
  theme?: {
    colors: { [string]: Array<string> | string },
    breakpoints:
      | { [string | number]: string | number }
      | Array<string | number>,
    space: { [string | number]: number } | Array<number>,
  },
}
export const ThemeProvider = ({ theme = {}, ...props }: ThemeProviderProps) => {
  const mergedTheme = React.useMemo(() => mergeDeepRight(baseTheme, theme), [
    theme,
  ])
  return <TP {...props} theme={mergedTheme} />
}
