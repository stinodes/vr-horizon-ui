import React from 'react'

const SvgFilter = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="filter_svg__feather filter_svg__feather-filter"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
  </svg>
)

export default SvgFilter
