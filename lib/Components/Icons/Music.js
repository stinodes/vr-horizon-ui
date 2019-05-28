import React from 'react'

const SvgMusic = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="music_svg__feather music_svg__feather-music"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" />
    <path d="M9 17V5l12-2v12" />
  </svg>
)

export default SvgMusic
