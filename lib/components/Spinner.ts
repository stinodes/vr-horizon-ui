import { keyframes } from '@emotion/core'
import { transparentize } from 'polished'
import { styled, getColor, StyledComponent } from '../utils'
import { HTMLAttributes } from 'react'

const animation = keyframes({
  from: {
    transform: 'rotate(0)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

export const Spinner: StyledComponent<
  HTMLAttributes<HTMLDivElement>,
  { size?: number; color?: string }
> = styled('div')(
  {
    borderRadius: '50%',
    background: 'transparent',
    animation: `${animation} 1s linear infinite`,
  },
  ({ theme, size = 24, color = 'white' }) => {
    const colorStyle = getColor(color || 'white', theme)
    return {
      border: `${24 * 0.13}px solid ${transparentize(0.8, colorStyle)}`,
      borderLeftColor: colorStyle,
      width: size,
      height: size,
    }
  },
)
