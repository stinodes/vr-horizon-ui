import React from 'react'

const SvgCheck = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check_svg__feather check_svg__feather-check"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export default SvgCheck
