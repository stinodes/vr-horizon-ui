import React from 'react'

const SvgLayout = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="layout_svg__feather layout_svg__feather-layout"
    viewBox="0 0 24 24"
    {...props}>
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M3 9h18M9 21V9" />
  </svg>
)

export default SvgLayout
