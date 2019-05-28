import React from 'react'

const SvgXSquare = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="x-square_svg__feather x-square_svg__feather-x-square"
    viewBox="0 0 24 24"
    {...props}>
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M9 9l6 6M15 9l-6 6" />
  </svg>
)

export default SvgXSquare
