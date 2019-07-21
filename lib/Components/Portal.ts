// @flow
import * as React from 'react'
import * as ReactDOM from 'react-dom'

let portalRoot
const getPortalRoot = () => {
  if (!portalRoot) portalRoot = document.getElementById('portal-root')
  return portalRoot
}

type Props = {
  rootId?: string,
  children: React.Node,
}
export const Portal = ({ children, rootId }: Props) => {
  const root = React.useMemo(() =>
    rootId ? document.getElementById(rootId) : getPortalRoot(),
  )
  const element = React.useMemo(() => document.createElement('div'))
  React.useEffect(() => {
    root && root.appendChild(element)
    return () => {
      root && root.removeChild(element)
    }
  })

  return ReactDOM.createPortal(children, element)
}
