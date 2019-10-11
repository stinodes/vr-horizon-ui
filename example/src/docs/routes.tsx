import { mount, lazy } from 'navi'

export const routes = mount({
  '/': lazy(() => import('./Home')),
  '/button': lazy(() => import('./Button')),
  '/text': lazy(() => import('./Text')),
})
