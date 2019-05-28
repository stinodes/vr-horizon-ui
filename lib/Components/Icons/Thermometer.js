import React from 'react'

const SvgThermometer = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="thermometer_svg__feather thermometer_svg__feather-thermometer"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>
)

export default SvgThermometer
