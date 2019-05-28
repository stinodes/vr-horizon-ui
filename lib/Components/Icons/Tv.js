import React from 'react'

const SvgTv = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tv_svg__feather tv_svg__feather-tv"
    viewBox="0 0 24 24"
    {...props}>
    <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
    <path d="M17 2l-5 5-5-5" />
  </svg>
)

export default SvgTv
