import { MutableRefObject, useMemo, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const useMeasure = (
  ref: MutableRefObject<null | HTMLElement>,
): null | ClientRect => {
  const [rect, setRect] = useState<null | ClientRect>(
    ref.current ? ref.current.getBoundingClientRect() : null,
  )
  const observer = useMemo(
    () =>
      new ResizeObserver(
        entries => entries[0] && setRect(entries[0].contentRect),
      ),
    [setRect],
  )
  const element = ref.current
  useEffect(() => {
    element && observer.observe(element)
    return () => {
      element && observer.unobserve(element)
    }
  }, [observer, element])

  useEffect(() => {
    ref.current && setRect(ref.current.getBoundingClientRect())
  }, [ref])

  return rect
}
