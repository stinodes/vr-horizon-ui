import React from 'react'

const SvgAward = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="award_svg__feather award_svg__feather-award"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={8} r={7} />
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
)

export default SvgAward
