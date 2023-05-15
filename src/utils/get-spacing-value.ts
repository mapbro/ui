import { MapbNumberSize } from "../types";

export function getSpacingValue(size: number | string): MapbNumberSize {
  if (!isNaN(Number(size))) {
    return `${size}px`;
  }
  return size;
}
 