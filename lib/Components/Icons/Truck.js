import React from 'react'

const SvgTruck = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="truck_svg__feather truck_svg__feather-truck"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <circle cx={5.5} cy={18.5} r={2.5} />
    <circle cx={18.5} cy={18.5} r={2.5} />
  </svg>
)

export default SvgTruck
