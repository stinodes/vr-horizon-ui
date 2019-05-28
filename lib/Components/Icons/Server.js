import React from 'react'

const SvgServer = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="server_svg__feather server_svg__feather-server"
    viewBox="0 0 24 24"
    {...props}>
    <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
    <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
    <path d="M6 6h0M6 18h0" />
  </svg>
)

export default SvgServer
