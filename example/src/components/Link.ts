import { styled } from '../utils'
import { Link as _Link } from 'react-navi'
import { Text, getColor } from '../ui'
import { tint } from 'polished'

export const Link = styled(Text.withComponent(_Link))(({ theme }) => ({
  color: getColor('primary', theme),
  fontWeight: 700,
  textDecoration: 'none',
  borderBottom: `2px solid ${getColor('primary', theme)}`,
  transition: 'color .2s ease',
  ':hover': {
    color: tint(0.3, getColor('primary', theme)),
  },
}))
