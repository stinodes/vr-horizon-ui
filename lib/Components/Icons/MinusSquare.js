import React from 'react'

const SvgMinusSquare = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="minus-square_svg__feather minus-square_svg__feather-minus-square"
    viewBox="0 0 24 24"
    {...props}>
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M8 12h8" />
  </svg>
)

export default SvgMinusSquare
