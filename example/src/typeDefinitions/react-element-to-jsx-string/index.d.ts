declare module 'react-element-to-jsx-string' {
  import { ReactNode } from 'react'

  declare type JSXToString = (node: ReactNode, options?: {}) => string
  declare const jsxToString: JSXToString

  export default jsxToString
}
