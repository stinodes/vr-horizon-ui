import { ReactNode } from 'react'

declare module '*.js' {
  function Icon(props: {
    stroke: null | string
    width: number
    height: number
  }): ReactNode
  export default Icon
}
