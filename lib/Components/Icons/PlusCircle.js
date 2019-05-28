import React from 'react'

const SvgPlusCircle = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="plus-circle_svg__feather plus-circle_svg__feather-plus-circle"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v8M8 12h8" />
  </svg>
)

export default SvgPlusCircle
