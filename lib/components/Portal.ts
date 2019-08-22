import { ReactNode, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'

let portalRoot
const getPortalRoot = () => {
  if (!portalRoot) portalRoot = document.getElementById('portal-root')
  return portalRoot
}

type Props = {
  rootId?: string
  children: ReactNode
}
export const Portal = ({ children, rootId }: Props) => {
  const root = useMemo(
    () => (rootId ? document.getElementById(rootId) : getPortalRoot()),
    [rootId],
  )
  const element = useMemo(() => document.createElement('div'), [])
  useEffect(() => {
    root && root.appendChild(element)
    return () => {
      root && root.removeChild(element)
    }
  }, [root])

  return createPortal(children, element)
}
