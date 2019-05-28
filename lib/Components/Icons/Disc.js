import React from 'react'

const SvgDisc = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="disc_svg__feather disc_svg__feather-disc"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={3} />
  </svg>
)

export default SvgDisc
