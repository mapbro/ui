import { MapbColors, Theme, colors } from "../styles";

type Colors = typeof colors;

export const themeColorGuard = (
  color: MapbColors | undefined,
  colors: Colors
) => {
  if (!color) {
    return "currentColor";
  }
  if (color in colors) {
    return colors[color];
  }
  return color;
};

export function getColorValue(color: MapbColors, theme: Theme) {
  return themeColorGuard(color, theme.colors);
}
