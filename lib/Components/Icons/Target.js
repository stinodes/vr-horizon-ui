import React from 'react'

const SvgTarget = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="target_svg__feather target_svg__feather-target"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={6} />
    <circle cx={12} cy={12} r={2} />
  </svg>
)

export default SvgTarget
