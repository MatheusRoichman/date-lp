import * as React from "react"
import { SvgAssetProps } from "../type"

export function Tiktok({ size, ...props }: SvgAssetProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.75 6.5v3.75A.75.75 0 0119 11a9.68 9.68 0 01-4.5-1.098v3.723a7.125 7.125 0 01-14.25 0c0-3.46 2.523-6.518 5.869-7.114A.75.75 0 017 7.25v4.002a.75.75 0 01-.428.678 1.875 1.875 0 102.678 1.695V1.25A.75.75 0 0110 .5h3.75a.75.75 0 01.75.75 4.504 4.504 0 004.5 4.5.75.75 0 01.75.75z"
        fill="#fff"
      />
    </svg>
  )
}
