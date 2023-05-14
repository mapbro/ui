import { css } from "@emotion/react";
import { DotorihamColors, Theme } from "../../styles";
import { DotorihamSize } from "../../types";
import { ButtonProps, ButtonVariant } from "./Button";
import { extractSystemStyles } from "../../utils";
import { useDotorihamTheme } from "../../context";

const sizes = {
  xs: { h: 30, px: 14 },
  sm: { h: 36, px: 18 },
  md: { h: 42, px: 22 },
  lg: { h: 50, px: 26 },
  xl: { h: 60, px: 32 },
} as const;

const compactSize = {
  xs: { h: 22, px: 7 },
  sm: { h: 26, px: 8 },
  md: { h: 30, px: 10 },
  lg: { h: 34, px: 12 },
  xl: { h: 40, px: 14 },
} as const;

const buttonStyle = (theme: Theme, loading?: boolean) => css`
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  box-sizing: border-box;
  appearance: "none";
  line-height: 1;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${loading &&
  css`
    opacity: 0.5;
    cursor: progress;
  `}
`;

const buttonSizeStyle = (
  theme: Theme,
  size: DotorihamSize,
  radius: DotorihamSize,
  compact?: boolean,
  fullWidth?: boolean
) => css`
  height: ${compact ? compactSize[size].h : sizes[size].h}px;
  padding-left: ${compact ? compactSize[size].px : sizes[size].px}px;
  padding-right: ${compact ? compactSize[size].px : sizes[size].px}px;
  font-size: ${theme.fontSize[size]};
  border-radius: ${theme.radius[radius]};
  ${fullWidth &&
  css`
    width: 100%;
  `}
`;

const buttonColorStyle = (
  theme: Theme,
  variant: ButtonVariant,
  color: DotorihamColors
) => {
  switch (variant) {
    case "filled":
      return css`
        color: white;
        background-color: ${theme.colors[color][6]};
        &:hover:not(:disabled) {
          background-color: ${theme.colors[color][7]};
        }
      `;
    case "outlined":
      return css`
        color: ${theme.colors[color][6]};
        background-color: transparent;
        border: 1px solid ${theme.colors[color][6]};
        &:hover:not(:disabled) {
          background-color: ${theme.colors[color][0]};
        }
      `;
    case "text":
      return css`
        color: ${theme.colors[color][6]};
        background-color: transparent;
        &:hover:not(:disabled) {
          background-color: ${theme.colors[color][0]};
        }
      `;
    case "light":
      return css`
        color: ${theme.colors[color][6]};
        background-color: ${theme.colors[color][1]};
        &:hover:not(:disabled) {
          background-color: ${theme.colors[color][2]};
        }
      `;
    default:
      return css`
        color: white;
        background-color: ${theme.colors[color][6]};
        &:hover:not(:disabled) {
          background-color: ${theme.colors[color][7]};
        }
      `;
  }
};

export const createStyles = (props: ButtonProps) => {
  const {
    size = "md",
    color = "green",
    variant = "filled",
    fullWidth = false,
    radius = "sm",
    loading = false,
    compact = false,
    ...others
  } = props;

  const { theme } = useDotorihamTheme();
  const { rest, systemStyles } = extractSystemStyles(others);

  const styles = [
    systemStyles,
    buttonStyle(theme, loading),
    buttonSizeStyle(theme, size, radius, compact, fullWidth),
    buttonColorStyle(theme, variant, color),
  ];

  return {
    styles,
    loading,
    ...rest,
  };
};
