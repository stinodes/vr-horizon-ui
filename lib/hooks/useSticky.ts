import { MutableRefObject } from 'react'
import { useIsInViewport } from './useIsInViewport'

export const useSticky = ({
  stickyRef,
  ...props
}: {
  offset?: string
  scroller?: string | Document | HTMLElement
  stickyRef: MutableRefObject<null | HTMLElement>
}) => {
  const { isInViewport } = useIsInViewport({
    targetRef: stickyRef,
    ...props,
  })
  const rect = stickyRef.current
    ? stickyRef.current.getBoundingClientRect()
    : { left: null, width: null }
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
