import React from 'react'

const SvgLock = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lock_svg__feather lock_svg__feather-lock"
    viewBox="0 0 24 24"
    {...props}>
    <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

export default SvgLock
