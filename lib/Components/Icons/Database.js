import React from 'react'

const SvgDatabase = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="database_svg__feather database_svg__feather-database"
    viewBox="0 0 24 24"
    {...props}>
    <ellipse cx={12} cy={5} rx={9} ry={3} />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

export default SvgDatabase
