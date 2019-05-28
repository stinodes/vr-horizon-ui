import React from 'react'

const SvgCode = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="code_svg__feather code_svg__feather-code"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
)

export default SvgCode
