import React from 'react'

const SvgBarChart = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="bar-chart_svg__feather bar-chart_svg__feather-bar-chart"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </svg>
)

export default SvgBarChart
