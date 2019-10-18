declare module '*.svg' {
  import { ReactNode, SVGAttributes, ComponentType } from 'react'
  const ReactComponent: ComponentType<SVGAttributes<SVGElement>>
  export default ReactComponent
}
