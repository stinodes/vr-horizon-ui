// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import withProps from 'recompose/withProps'
import { transparentize } from 'polished'
import { color, opacity } from 'styled-system'
import { layout, position, flexBox } from './styles'

export const Box = styled('div')(layout, position, color)
export const Flex = styled(Box)({ display: 'flex' }, flexBox)

export const Absolute = withProps({ position: 'absolute' })(Box)

export const MaxWidthContainer = (props: {}) => (
  <Flex
    px={{ sm: 6, lg: 140 }}
    maxWidth={1640}
    width={1}
    mx="auto"
    flexDirection="column"
    {...props}
  />
)

export const Grid = withProps(({ gutter, ...props }) => {
  let invertedGutter
  if (Array.isArray(gutter)) gutter.map(v => -v)
  else if (typeof gutter === 'object')
    invertedGutter = Object.keys(gutter).reduce(
      (prev, k) => ({
        ...prev,
        [k]: -gutter[k],
      }),
      {},
    )
  else invertedGutter = -gutter

  return { ...props, mx: invertedGutter || -6 }
})(Box)
export const Col = withProps(({ gutter, ...props }) => ({
  ...props,
  px: gutter || 6,
}))(styled(Box)({ display: 'inline-block' }))

export const ScrollView = styled(Box)(
  ({ horizontal }) => {
    if (horizontal) return { overflowX: 'auto' }
    return { overflowY: 'auto', overflowX: 'hidden' }
  },
  ({ theme }) => ({
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.colors.charlestonGreen,
      borderRadius: 4,
    },
  }),
)

export const Opacity = styled(Box)(
  { transition: 'opacity .2s ease' },
  opacity,
  ({ hover }) => ({ ':hover': { opacity: hover } }),
)

export const Card = styled(Flex)(
  { borderRadius: 3 },
  ({ theme, borderRadius, border, shadow, flexDirection = 'column' }) => ({
    flexDirection,
    border:
      border &&
      `${transparentize(0.95)(
        typeof border === 'string' ? border : theme.colors.blackCoral,
      )} 1px solid`,
    boxShadow:
      shadow &&
      `${transparentize(0.9)(theme.colors.blackCoral)} 0 ${
        position === 'bottom' ? -8 : 8
      }px 24px`,
    borderRadius,
  }),
)
