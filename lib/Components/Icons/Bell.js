import React from 'react'

const SvgBell = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bell_svg__feather bell_svg__feather-bell"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" />
  </svg>
)

export default SvgBell
