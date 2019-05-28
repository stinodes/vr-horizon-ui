import React from 'react'

const SvgXCircle = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="x-circle_svg__feather x-circle_svg__feather-x-circle"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M15 9l-6 6M9 9l6 6" />
  </svg>
)

export default SvgXCircle
