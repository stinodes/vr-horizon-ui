import { styled, getColor } from '../utils'
import { Flex, FlexProps } from './Flex'
import { transparentize } from 'polished'

export type CardProps = FlexProps & {
  border?: boolean | string
  shadow?: boolean | string
  borderRadius?: number | string
  shadowPosition?: 'top' | 'bottom'
}
export const Card = styled(Flex)<CardProps>(
  { borderRadius: 3 },
  ({ theme, borderRadius, border, shadow, shadowPosition }) => ({
    border:
      border &&
      `${transparentize(
        0.95,
        typeof border === 'string' ? border : getColor('darks.2', theme),
      )} 1px solid`,
    boxShadow:
      shadow &&
      (typeof shadow === 'string'
        ? shadow
        : `${transparentize(0.9, getColor('darks.2', theme))} 0 ${
            shadowPosition === 'top' ? -8 : 8
          }px 24px`),
    borderRadius,
  }),
)
