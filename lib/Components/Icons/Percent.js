import React from 'react'

const SvgPercent = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="percent_svg__feather percent_svg__feather-percent"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M19 5L5 19" />
    <circle cx={6.5} cy={6.5} r={2.5} />
    <circle cx={17.5} cy={17.5} r={2.5} />
  </svg>
)

export default SvgPercent
