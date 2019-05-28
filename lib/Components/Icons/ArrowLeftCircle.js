import React from 'react'

const SvgArrowLeftCircle = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="arrow-left-circle_svg__feather arrow-left-circle_svg__feather-arrow-left-circle"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8l-4 4 4 4M16 12H8" />
  </svg>
)

export default SvgArrowLeftCircle
