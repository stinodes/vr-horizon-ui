// @flow
import styled from '@emotion/styled'
import { color } from 'styled-system'
import { typography } from './styles'

export const Text = styled('p')(
  {
    fontSize: 16,
    lineHeight: 1.3,
    margin: 0,
  },
  ({
    theme: {
      colors: { text },
      fontFamily,
    },
  }) => ({ fontFamily, color: text }),
  color,
  typography,
)
export const Heading = styled('h1')(
  {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 1.6,
    margin: 0,
  },
  ({
    theme: {
      colors: { text },
    },
  }) => ({ color: text }),
  color,
  typography,
)
