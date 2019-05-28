import React from 'react'

const SvgUnderline = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="underline_svg__feather underline_svg__feather-underline"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3M4 21h16" />
  </svg>
)

export default SvgUnderline
