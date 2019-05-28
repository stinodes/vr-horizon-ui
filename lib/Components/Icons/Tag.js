import React from 'react'

const SvgTag = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="tag_svg__feather tag_svg__feather-tag"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h0" />
  </svg>
)

export default SvgTag
