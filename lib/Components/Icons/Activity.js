import React from 'react'

const SvgActivity = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="activity_svg__feather activity_svg__feather-activity"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
)

export default SvgActivity
