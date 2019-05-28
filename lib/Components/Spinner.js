// @flow
import styled from '@emotion/styled'
import { path, split } from 'ramda'
import { keyframes } from '@emotion/core'
import { transparentize } from 'polished'

const animation = keyframes({
  from: {
    transform: 'rotate(0)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})
export const Spinner = styled('div')(
  {
    borderRadius: '50%',
    background: 'transparent',
    animation: `${animation} 1s linear infinite`,
  },
  ({ theme: { colors }, size = 24, color = 'white' }) => {
    const colorStyle = path(split('.', color), colors) || 'white'
    return {
      border: `${24 * 0.13}px solid ${transparentize(0.8)(colorStyle)}`,
      borderLeftColor: colorStyle,
      width: size,
      height: size,
    }
  },
)
