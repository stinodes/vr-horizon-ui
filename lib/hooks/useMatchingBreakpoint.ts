import { useContext, useState, useCallback, useEffect } from 'react'
import { ThemeContext } from '@emotion/core'
import { Theme } from '../theme'

const createQuery = (key: string, value: string) => `(${key}: ${value})`
export const useMatchingBreakpoint = (
  size: 'sm' | 'md' | 'lg' | 'xlg',
  disable?: boolean,
) => {
  const theme = useContext(ThemeContext) as Theme
  const breakpoints = theme.breakpoints
  const [isMatching, setMatching] = useState(false)

  const handleResize = useCallback(() => {
    const newMatching = window.matchMedia(
      createQuery('min-width', breakpoints[size]),
    ).matches
    if (newMatching !== isMatching) {
      setMatching(newMatching)
    }
  }, [isMatching])

  useEffect(() => {
    handleResize()
  }, [size])

  useEffect(() => {
    if (disable) return () => {}
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [isMatching])

  return isMatching
}
