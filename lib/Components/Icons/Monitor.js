import React from 'react'

const SvgMonitor = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="monitor_svg__feather monitor_svg__feather-monitor"
    viewBox="0 0 24 24"
    {...props}>
    <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
    <path d="M8 21h8M12 17v4" />
  </svg>
)

export default SvgMonitor
