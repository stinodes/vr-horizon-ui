import React from 'react'

const SvgBox = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="box_svg__feather box_svg__feather-box"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" />
    <path d="M2.32 6.16L12 11l9.68-4.84M12 22.76V11" />
  </svg>
)

export default SvgBox
