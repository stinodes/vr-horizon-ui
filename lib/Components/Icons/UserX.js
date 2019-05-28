import React from 'react'

const SvgUserX = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="user-x_svg__feather user-x_svg__feather-user-x"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={8.5} cy={7} r={4} />
    <path d="M18 8l5 5M23 8l-5 5" />
  </svg>
)

export default SvgUserX
