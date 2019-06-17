// @flow
// @jsx jsx
import { jsx } from '@emotion/core'
import React, {
  cloneElement,
  useRef,
  useEffect,
  useContext,
  useCallback,
  useState,
  useMemo,
} from 'react'
import { path, converge, nthArg } from 'ramda'
import { ThemeContext } from '@emotion/core'
import { Box } from '../Components'
import { throttle } from '../Utils'
import type { Element } from 'react'

const createQuery = (key: string, value: string) => `(${key}: ${value})`
export const useMatchingBreakpoint = (
  size: 'sm' | 'md' | 'lg' | 'xlg',
  disable?: boolean,
) => {
  const { breakpoints } = useContext(ThemeContext)
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

export const useOnKeyCodePress = (
  handler: () => any,
  keyCode: number,
  bound?: boolean = true,
) => {
  const closeOnEscPress = useCallback(e => e.keyCode === keyCode && handler(), [
    handler,
  ])
  useEffect(() => {
    if (bound) {
      window.addEventListener('keyup', closeOnEscPress)
      return () => window.removeEventListener('keyup', closeOnEscPress)
    }
  }, [bound])
}
export const useOnEscPress = converge(useOnKeyCodePress, [
  nthArg(0),
  () => 27,
  nthArg(1),
])

export const useIsInViewport = ({
  enabled = true,
  offset = 0,
  scroller,
  detectorRef,
}: {
  enabled?: boolean,
  offset?: number,
  scroller?: string | Document | HTMLElement,
  detectorRef: { current: ?HTMLElement },
}) => {
  const [isInViewport, setIsInViewport] = useState(true)

  const scrollerElement = useMemo(() => {
    if (typeof scroller === document) return null
    if (typeof scroller === 'string') return document.querySelector(scroller)
    return scroller || null
  }, [scroller])

  const onIntersectChange = useCallback(
    entries => {
      setIsInViewport(path([0, 'isIntersecting'], entries))
    },
    [detectorRef],
  )

  const observer = useMemo(
    () =>
      new IntersectionObserver(onIntersectChange, {
        root: scrollerElement,
        margin: '0',
        ratio: 1,
      }),
    [scrollerElement],
  )
  useEffect(() => {
    if (detectorRef.current) observer.observe(detectorRef.current)
    return () => {
      detectorRef.current && observer.unobserve(detectorRef.current)
    }
  }, [observer, detectorRef.current])

  return {
    isInViewport: enabled && isInViewport,
  }
}

export const useSticky = ({
  stickyRef,
  ...props
}: {
  offset?: number,
  scroller?: string | Document | HTMLElement,
  stickyRef: { current: ?HTMLElement },
}) => {
  const { isInViewport } = useIsInViewport({
    detectorRef: stickyRef,
    ...props,
  })
  const rect = stickyRef.current
    ? stickyRef.current.getBoundingClientRect()
    : {}
  const stickyStyles = !isInViewport
    ? {
        position: 'fixed',
        top: 0,
        left: rect.left,
        width: rect.width,
      }
    : null

  return {
    stickyStyles,
  }
}
