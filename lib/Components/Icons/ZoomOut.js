import React from 'react'

const SvgZoomOut = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="zoom-out_svg__feather zoom-out_svg__feather-zoom-out"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={11} cy={11} r={8} />
    <path d="M21 21l-4.35-4.35M8 11h6" />
  </svg>
)

export default SvgZoomOut
