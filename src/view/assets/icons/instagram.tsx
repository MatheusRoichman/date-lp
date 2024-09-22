import * as React from "react"
import { SvgAssetProps } from "../type"

export function Instagram({ size, ...props }: SvgAssetProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 6.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 6.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.5.875h-9A5.632 5.632 0 00.875 6.5v9A5.632 5.632 0 006.5 21.125h9a5.632 5.632 0 005.625-5.625v-9A5.631 5.631 0 0015.5.875zM18.875 15.5a3.375 3.375 0 01-3.375 3.375h-9A3.375 3.375 0 013.125 15.5v-9A3.375 3.375 0 016.5 3.125h9A3.375 3.375 0 0118.875 6.5v9zm-1.5-9.375a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="#fff"
      />
    </svg>
  )
}
