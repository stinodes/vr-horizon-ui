import React from 'react'

const SvgZoomIn = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="zoom-in_svg__feather zoom-in_svg__feather-zoom-in"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={11} cy={11} r={8} />
    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
  </svg>
)

export default SvgZoomIn
