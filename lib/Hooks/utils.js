// @flow
import React, {
  // $FlowFixMe
  useRef,
  // $FlowFixMe
  useEffect,
  // $FlowFixMe
  useContext,
  // $FlowFixMe
  useCallback,
  // $FlowFixMe
  useState,
} from 'react'
import { converge, nthArg } from 'ramda'
import { ThemeContext } from '@emotion/core'

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
  scrollSelector = '#scroll-container',
}: {
  enabled?: boolean,
  offset?: number,
  scrollSelector?: string,
}) => {
  const [isInViewport, setIsInViewport] = useState(false)
  const detectorRef = useRef()
  const onScroll = () => {
    const rect = detectorRef.current
      ? detectorRef.current.getBoundingClientRect()
      : {}
    const isInFrame = rect.top < window.innerHeight - offset
    if (isInFrame !== isInViewport) setIsInViewport(isInFrame)
  }
  useEffect(() => {
    let scrollContainer
    if (enabled) {
      scrollContainer = document.querySelector(scrollSelector)
      scrollContainer && scrollContainer.addEventListener('scroll', onScroll)
    }
    return () => {
      scrollContainer && scrollContainer.removeEventListener('scroll', onScroll)
    }
  }, [enabled])

  const detector = <div ref={detectorRef} />
  return {
    detector,
    isInViewport: enabled && isInViewport,
  }
}
