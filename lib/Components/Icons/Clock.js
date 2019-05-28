import React from 'react'

const SvgClock = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="clock_svg__feather clock_svg__feather-clock"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M12 6v6l4 2" />
  </svg>
)

export default SvgClock
