import React from 'react'

const SvgPieChart = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pie-chart_svg__feather pie-chart_svg__feather-pie-chart"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
)

export default SvgPieChart
