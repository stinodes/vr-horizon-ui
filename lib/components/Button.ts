import { transparentize } from 'polished'
import {
  color,
  typography,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system'
import { join, compose, prop, mergeAll } from 'ramda'
import { CSSObject } from '@emotion/css'
import { interactiveColor, outline } from './styles'
import { Flex } from './Flex'
import { getColor, styled, StyledComponent } from '../utils'
import { Theme } from '../theme'
import {
  HTMLAttributes,
  ComponentProps,
  ComponentPropsWithoutRef,
  DetailedHTMLProps,
  ComponentPropsWithRef,
  HTMLProps,
  ClassAttributes,
  RefAttributes,
  ButtonHTMLAttributes,
} from 'react'

const buttonColor: (
  props: ColorProps & DisabledProps,
) => CSSObject = interactiveColor(
  compose(
    mergeAll,
    color,
  ),
)

type ColorProps = { bg?: string; color?: string }
type ShadowProps = {
  bg?: string
  raised?: boolean
  glow?: boolean
}
type DisabledProps = { disabled?: boolean }

const shadows = ({
  theme,
  bg = 'primary',
  raised,
  glow,
}: ShadowProps & { theme: Theme }) => {
  const shadows = []
  if (raised) shadows.push('rgba(0, 0, 0, .2) 0 8px 16px')
  if (glow) shadows.push(`${transparentize(0.5, getColor(bg, theme))} 0 0 24px`)
  return {
    boxShadow: join(',', shadows),
  }
}

type BaseProps = DisabledProps & ShadowProps & ColorProps
const Base: StyledComponent<
  ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>,
  BaseProps & FlexboxProps & LayoutProps & SpaceProps
> = styled(Flex.withComponent('button'))(
  buttonColor,
  typography,
  {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  shadows,
  ({ disabled }) => (disabled ? { cursor: 'not-allowed' } : {}),
)

const BaseWithOutline: typeof Base = styled(Base)(outline())
BaseWithOutline.displayName = 'FlexButton'

type SizeProps = { size?: 'regular' | 'small' | 'circle' }
const button = ({ size }: SizeProps) => {
  if (size === 'small') {
    return {
      padding: '8px 16px',
      fontSize: 14,
      borderRadius: 2,
    }
  } else if (size === 'circle') {
    return {
      width: 48,
      height: 48,
      borderRadius: 24,
    }
  }
  return {
    padding: '16px 32px',
    fontSize: 14,
    borderRadius: 2,
  }
}

const StyledButton: StyledComponent<
  ComponentPropsWithRef<typeof Base>,
  SizeProps
> = styled(Base)(
  {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 600,
  } as CSSObject,
  outline({
    borderRadius: (props: {}) => button(props).borderRadius,
  }),
  button,
)
StyledButton.displayName = 'Button'

const floatingButton = ({ size = 64 }: { size?: number }) => ({
  width: size,
  height: size,
  borderRadius: size * 0.5,
})
const StyledFloatingButton: StyledComponent<
  ComponentProps<typeof Base>,
  { size?: number }
> = styled(Base)(
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline({
    borderRadius: (props: {}) => floatingButton(props).borderRadius,
  }),
  floatingButton,
)
StyledFloatingButton.displayName = 'FloatingButton'

export const FlexButton = BaseWithOutline
export const Button = StyledButton
export const FloatingButton = StyledFloatingButton
