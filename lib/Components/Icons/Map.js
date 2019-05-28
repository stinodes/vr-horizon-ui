import React from 'react'

const SvgMap = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="map_svg__feather map_svg__feather-map"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16" />
  </svg>
)

export default SvgMap
