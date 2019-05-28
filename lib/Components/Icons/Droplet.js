import React from 'react'

const SvgDroplet = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="droplet_svg__feather droplet_svg__feather-droplet"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
)

export default SvgDroplet
