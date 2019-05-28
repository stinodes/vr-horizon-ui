import React from 'react'

const SvgCrosshair = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="crosshair_svg__feather crosshair_svg__feather-crosshair"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={10} />
    <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
  </svg>
)

export default SvgCrosshair
