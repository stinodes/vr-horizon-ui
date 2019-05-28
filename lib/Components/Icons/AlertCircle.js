import React from 'react'

const SvgAlertCircle = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="alert-circle_svg__feather alert-circle_svg__feather-alert-circle"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v4M12 16h0" />
  </svg>
)

export default SvgAlertCircle
