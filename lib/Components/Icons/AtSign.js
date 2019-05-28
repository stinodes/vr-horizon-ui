import React from 'react'

const SvgAtSign = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="at-sign_svg__feather at-sign_svg__feather-at-sign"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={4} />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
)

export default SvgAtSign
