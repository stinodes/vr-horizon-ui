// @flow
import * as React from 'react'
import { ThemeContext } from '@emotion/core'
import styled from '@emotion/styled'
import { width, height } from 'styled-system'

type Props = {
  color?: string,
  size?: number,
  icon: React.ComponentType<{ stroke: ?string }>,
}
const Icon = ({ color, icon: Svg, size, ...props }: Props) => {
  const theme = React.useContext(ThemeContext)
  const colorString = theme.colors[color] || color || theme.colors.icon
  return <Svg stroke={colorString} {...props} height={size} width={size} />
}

const StyledIcon = styled(Icon)(width, height)

export { StyledIcon as Icon }
