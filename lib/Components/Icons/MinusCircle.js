import React from 'react'

const SvgMinusCircle = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="minus-circle_svg__feather minus-circle_svg__feather-minus-circle"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M8 12h8" />
  </svg>
)

export default SvgMinusCircle
