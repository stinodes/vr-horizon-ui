import React, { ComponentType, useContext } from 'react'
import { ThemeContext } from '@emotion/core'
import { width, height } from 'styled-system'
import { styled, getColor } from '../../utils'
import { Theme } from '../../theme'

type Props = {
  color?: string
  size?: number
  icon: ComponentType<{ stroke: null | string; height: number; width: number }>
}
const Icon = ({ color, icon: Svg, size, ...props }: Props) => {
  const theme = useContext(ThemeContext) as Theme
  const colorString = getColor(color, theme)
  return <Svg stroke={colorString} {...props} height={size} width={size} />
}

const StyledIcon = styled(Icon)(width, height)

export { StyledIcon as Icon }
