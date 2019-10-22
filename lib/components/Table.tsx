import { color, LayoutProps, SpaceProps } from 'styled-system'
import { styled, getColor, StyledComponent } from '../utils'
import { Box } from './Box'
import { HTMLAttributes } from 'react'

export const Table = styled(Box.withComponent('table'))({
  borderCollapse: 'collapse',
})
Table.displayName = 'Table'

export const Row: StyledComponent<
  HTMLAttributes<HTMLTableRowElement>,
  { border?: boolean }
> = styled(Box.withComponent('tr'))<{ border?: boolean }>(
  ({ theme, border }) => ({
    borderSpacing: 0,
    'td, th': {
      borderBottom: border
        ? `${getColor('lights.2', theme)} 1px solid`
        : undefined,
    },
  }),
)
Row.displayName = 'Row'
export const Cell: StyledComponent<
  HTMLAttributes<HTMLTableCellElement>,
  LayoutProps & SpaceProps & { bg?: string; color?: string }
> = styled(Box.withComponent('td'))(
  {
    whiteSpace: 'nowrap',
    textAlign: 'left',
    lineHeight: '48px',
    marginRight: 2,
    padding: '0 10px',
    height: '100%',
  },
  ({ theme }) => ({
    color: getColor('darks.1', theme),
    backgroundColor: getColor('white', theme),
  }),
  color,
)
Cell.displayName = 'Cell'
export const Header: StyledComponent<
  HTMLAttributes<HTMLTableHeaderCellElement>,
  LayoutProps & SpaceProps & { bg?: string; color?: string }
> = styled(Box.withComponent('th'))(
  {
    lineHeight: '28px',
    padding: '0 10px',
    textAlign: 'left',
    marginBottom: 4,
    marginRight: 1,
    fontSize: 14,
    fontWeight: 'normal',
  },
  ({ theme }) => ({ color: getColor('darks.4', theme) }),
  color,
)
Header.displayName = 'Header'
