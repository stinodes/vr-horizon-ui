import { color, typography, TypographyProps } from 'styled-system'
import { styled, getColor } from '../utils'

export type TextProps = TypographyProps & { color?: string }
const Text = styled('p')<TextProps>(
  {
    fontSize: 16,
    lineHeight: 1.3,
    margin: 0,
  },
  ({ theme }) => ({
    fontFamily: theme.fontFamily,
    color: getColor('text', theme),
  }),
  color,
  typography,
)
Text.displayName = 'Text'

const Heading = styled('h1')<TextProps>(
  {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 1.6,
    margin: 0,
  },
  ({ theme }) => ({ color: getColor('text', theme) }),
  color,
  typography,
)
Heading.displayName = 'Heading'

export { Text, Heading }
