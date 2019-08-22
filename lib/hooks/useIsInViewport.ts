import {
  useMemo,
  useState,
  useCallback,
  MutableRefObject,
  useEffect,
} from 'react'
import { path } from 'ramda'

export const useIsInViewport = ({
  enabled = true,
  offset = '0',
  scroller,
  targetRef,
}: {
  enabled?: boolean
  offset?: string
  scroller?: string | Document | HTMLElement
  targetRef: MutableRefObject<null | HTMLElement>
}) => {
  const [isInViewport, setIsInViewport] = useState(true)

  const scrollerElement = useMemo(() => {
    if (scroller instanceof Document) return null
    if (typeof scroller === 'string') return document.querySelector(scroller)
    return scroller || null
  }, [scroller])

  const onIntersectChange = useCallback(
    entries => {
      setIsInViewport(path([0, 'isIntersecting'], entries))
    },
    [targetRef],
  )

  const observer = useMemo(
    () =>
      new IntersectionObserver(onIntersectChange, {
        root: scrollerElement,
        rootMargin: offset,
        threshold: 1,
      }),
    [scrollerElement],
  )
  useEffect(() => {
    const target = targetRef.current
    if (target) observer.observe(target)
    return () => {
      target && observer.unobserve(target)
    }
  }, [observer, targetRef])

  return {
    isInViewport: enabled && isInViewport,
  }
}
