import { ComponentPropsWithoutRef } from "react";

export type SvgAssetProps = ComponentPropsWithoutRef<"svg"> & {
  size?: number;
};