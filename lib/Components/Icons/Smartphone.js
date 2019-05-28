import React from 'react'

const SvgSmartphone = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="smartphone_svg__feather smartphone_svg__feather-smartphone"
    viewBox="0 0 24 24"
    {...props}>
    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
    <path d="M12 18h0" />
  </svg>
)

export default SvgSmartphone
