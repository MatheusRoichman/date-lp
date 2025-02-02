import * as React from "react"
import { SvgAssetProps } from "../type"

export function X({ size, ...props }: SvgAssetProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.449 17.646L11.73 8.665l5.599-6.158A1.125 1.125 0 0015.664.993l-5.182 5.704-3.533-5.55A1.125 1.125 0 006 .624H1.5a1.125 1.125 0 00-.949 1.729l5.719 8.981-5.603 6.158a1.125 1.125 0 101.665 1.514l5.186-5.704 3.533 5.55a1.125 1.125 0 00.949.522h4.5a1.125 1.125 0 00.949-1.729zm-4.831-.521L3.549 2.875h1.833l9.069 14.25h-1.833z"
        fill="#fff"
      />
    </svg>
  )
}
