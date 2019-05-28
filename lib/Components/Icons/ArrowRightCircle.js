import React from 'react'

const SvgArrowRightCircle = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-right-circle_svg__feather arrow-right-circle_svg__feather-arrow-right-circle"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M12 16l4-4-4-4M8 12h8" />
  </svg>
)

export default SvgArrowRightCircle
