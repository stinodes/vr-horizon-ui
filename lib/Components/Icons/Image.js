import React from 'react'

const SvgImage = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="image_svg__feather image_svg__feather-image"
    viewBox="0 0 24 24"
    {...props}>
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <circle cx={8.5} cy={8.5} r={1.5} />
    <path d="M21 15l-5-5L5 21" />
  </svg>
)

export default SvgImage
