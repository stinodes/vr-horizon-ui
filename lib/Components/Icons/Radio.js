import React from 'react'

const SvgRadio = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="radio_svg__feather radio_svg__feather-radio"
    viewBox="0 0 24 24"
    {...props}>
    <circle cx={12} cy={12} r={2} />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </svg>
)

export default SvgRadio
