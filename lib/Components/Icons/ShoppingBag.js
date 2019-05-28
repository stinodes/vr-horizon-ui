import React from 'react'

const SvgShoppingBag = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shopping-bag_svg__feather shopping-bag_svg__feather-shopping-bag"
    viewBox="0 0 24 24"
    {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
  </svg>
)

export default SvgShoppingBag
