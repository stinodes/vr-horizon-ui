import {
  color,
  typography,
  TypographyProps,
  SpaceProps,
  space,
} from 'styled-system'
import { styled, getColor, StyledComponent } from '../utils'
import { HTMLAttributes } from 'react'

export type TextProps = TypographyProps & SpaceProps & { color?: string }
const Text: StyledComponent<
  HTMLAttributes<HTMLParagraphElement>,
  TextProps
> = styled('p')(
  {
    fontSize: 16,
    lineHeight: 1.3,
    margin: 0,
  },
  ({ theme }) => ({
    fontFamily: theme.fontFamily,
    color: getColor('text', theme),
  }),
  space,
  color,
  typography,
)
Text.displayName = 'Text'

const Heading: StyledComponent<
  HTMLAttributes<HTMLHeadingElement>,
  TextProps
> = styled('h1')(
  {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 1.6,
    margin: 0,
  },
  ({ theme }) => ({ color: getColor('text', theme) }),
  space,
  color,
  typography,
)
Heading.displayName = 'Heading'

export { Text, Heading }
