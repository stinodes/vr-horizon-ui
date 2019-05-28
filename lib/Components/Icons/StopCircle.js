import React from 'react'

const SvgStopCircle = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="stop-circle_svg__feather stop-circle_svg__feather-stop-circle"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M9 9h6v6H9z" />
  </svg>
)

export default SvgStopCircle
