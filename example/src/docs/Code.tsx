import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { styled } from '../utils'

export const Code = styled(({ className, ...props }) => (
  <div className={className}>
    <SyntaxHighlighter
      language="jsx"
      style={coy}
      customStyle={{ lineHeight: 1.2, backgroundColor: 'transparent' }}
      codeTagProps={{ style: {} }}
      {...props}
    />
  </div>
))(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.space[3],
}))
