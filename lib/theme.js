// @flow
import * as React from 'react'
import { mergeDeepRight } from 'ramda'
import { ThemeProvider as TP } from 'emotion-theming'
import { transparentize } from 'polished'

const blues = ['#004D93', '#0063BE', '#0078e7', '#2E90EB', '#5CA9EF']
const teals = ['#009487', '#00BEAE', '#00E8D4', '#2EECDB', '#5CF0E3']
const greens = ['#009454', '#00BE6C', '#00E883', '#2EEC99', '#5CF0B0']
const reds = ['#94002A', '#BE0036', '#E80041', '#EC2E63', '#F05C86']
const yellows = ['#9F9500', '#CCBF00', '#F9E900', '#FAED2E', '#FAED2E']
const darks = ['#2C2F3C', '#404360', '#60637D', '#7F849D', '#9D9EB6']
const lights = ['#D4D6E3', '#E9E9F0', '#F0F2F6', '#F9FAFC', '#FCFCFD']

export const baseTheme = {
  colors: {
    blues,
    teals,
    greens,
    reds,
    yellows,
    darks,
    lights,
    text: darks[2],
    error: reds[2],
    fadedError: reds[4],
    success: greens[2],
    alert: yellows[2],
    overlay: transparentize(0.1, darks[4]),

    primary: blues[2],
  },
  fontFamily: 'Montserrat',
  breakpoints: { sm: 0, md: '40em', lg: '64em', xlg: '80em' },
  space: [0, 8, 16, 24, 32, 48, 64, 128, 256, 512],
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
