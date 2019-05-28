import React from 'react'

const SvgAirplay = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="airplay_svg__feather airplay_svg__feather-airplay"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
    <path d="M12 15l5 6H7l5-6z" />
  </svg>
)

export default SvgAirplay
