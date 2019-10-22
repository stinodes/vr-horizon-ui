import { useContext, useState, useCallback, useEffect } from 'react'
import { ThemeContext } from '@emotion/core'
import { Theme } from '../theme'

const createQuery = (key: string, value: string) => `(${key}: ${value})`
const matchesQuery = (size: string) =>
  window.matchMedia(createQuery('min-width', size)).matches

export const useMatchingBreakpoint = (
  size: 'sm' | 'md' | 'lg' | 'xlg',
  disable?: boolean,
) => {
  const { breakpoints } = useContext(ThemeContext) as Theme
  const [isMatching, setMatching] = useState(matchesQuery(breakpoints[size]))

  const handleResize = useCallback(() => {
    const newMatching = matchesQuery(breakpoints[size])
    if (newMatching !== isMatching) {
      setMatching(newMatching)
    }
  }, [isMatching, breakpoints, size])

  useEffect(() => {
    if (disable) return () => {}
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [disable, handleResize])

  return isMatching
}
