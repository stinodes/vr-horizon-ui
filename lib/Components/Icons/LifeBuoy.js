import React from 'react'

const SvgLifeBuoy = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="life-buoy_svg__feather life-buoy_svg__feather-life-buoy"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={4} />
    <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M14.83 9.17l3.53-3.53M4.93 19.07l4.24-4.24" />
  </svg>
)

export default SvgLifeBuoy
