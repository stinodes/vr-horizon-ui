import React from 'react'

const SvgPause = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pause_svg__feather pause_svg__feather-pause"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
  </svg>
)

export default SvgPause
