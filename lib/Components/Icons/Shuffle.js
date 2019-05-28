import React from 'react'

const SvgShuffle = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shuffle_svg__feather shuffle_svg__feather-shuffle"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
  </svg>
)

export default SvgShuffle
