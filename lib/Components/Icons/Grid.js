import React from 'react'

const SvgGrid = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="grid_svg__feather grid_svg__feather-grid"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
  </svg>
)

export default SvgGrid
