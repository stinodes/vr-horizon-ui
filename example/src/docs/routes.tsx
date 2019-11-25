import { mount, lazy } from 'navi'

export const routes = mount({
  '/': lazy(() => import('./Home')),
  '/button': lazy(() => import('./Buttons')),
  '/text': lazy(() => import('./Text')),
  '/containers': lazy(() => import('./Containers')),
  '/input': lazy(() => import('./Input')),
  '/modal': lazy(() => import('./Modal')),
  '/table': lazy(() => import('./Table')),
  '/icon': lazy(() => import('./Icon')),
  '/context-menu': lazy(() => import('./ContextMenu')),
})
