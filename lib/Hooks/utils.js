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
} from 'react'
import { converge, nthArg } from 'ramda'
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
  const onScroll = () => {
    const rect = detectorRef.current
      ? detectorRef.current.getBoundingClientRect()
      : {}
    const isInFrame =
      rect.top < window.innerHeight - offset && rect.bottom > 0 + offset
    if (isInFrame !== isInViewport) setIsInViewport(isInFrame)
  }
  useEffect(() => {
    let scrollContainer
    const scrollHandler = throttle(onScroll)

    if (enabled) {
      scrollContainer =
        typeof scroller === 'string' || !scroller
          ? document.querySelector(scroller || '#scroll-container')
          : scroller
      scrollContainer &&
        scrollContainer.addEventListener('scroll', scrollHandler)
    }
    return () => {
      scrollContainer &&
        scrollContainer.removeEventListener('scroll', scrollHandler)
    }
  }, [enabled, isInViewport])

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
