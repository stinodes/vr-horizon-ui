import React from 'react'

const SvgPocket = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pocket_svg__feather pocket_svg__feather-pocket"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
    <path d="M8 10l4 4 4-4" />
  </svg>
)

export default SvgPocket
