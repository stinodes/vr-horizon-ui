import { styled } from '../utils'
import { Text } from '../ui'
import { getColor } from '../ui'

export const Accent = styled(Text.withComponent('span'))(({ theme }) => ({
  color: getColor('primary', theme),
  fontWeight: 700,
}))
