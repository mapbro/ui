import { forwardRef, ReactNode } from "react";

import { createStyles } from "./Button.styles";
import { Loading } from "../Loading";
import { css } from "@emotion/react";
import { createPolymorphicComponent } from "../../helper";
import { DefaultProps, MapbSize } from "../../types";
import { MapbColors } from "../../styles";
import { Box } from "../Box";

export type ButtonVariant = "filled" | "outlined" | "text" | "light";

export interface ButtonProps extends DefaultProps {
  /**
   * 버튼 사이즈
   * @default 'md'
   */
  size?: MapbSize;
  /**
   * 버튼 색상
   * @default "green"
   */
  color?: MapbColors;
  /**
   * 왼쪽 아이콘
   */
  leftIcon?: ReactNode;
  /**
   * 오른쪽 아이콘
   */
  rightIcon?: ReactNode;
  /**
   * full width
   */
  fullWidth?: boolean;
  /**
   * 버튼 둥글기
   * @default 'sm'
   */
  radius?: MapbSize;
  /**
   * 버튼 종류
   * @default 'filled'
   */
  variant?: ButtonVariant;
  /**
   * 로딩 상태
   */
  loading?: boolean;
  /**
   * 비활성화
   */
  disabled?: boolean;
  /**
   * 컴팩트
   */
  compact?: boolean;
  /**
   * click
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: ReactNode;
}

const ButtonComponent = forwardRef<HTMLDivElement, ButtonProps>(
  (props, ref) => {
    const {
      styles,
      leftIcon,
      rightIcon,
      onClick,
      as = "button",
      loading,
      children,
      ...others
    } = createStyles(props);

    return (
      <Box as={as} ref={ref} css={styles} onClick={onClick} {...others}>
        {children}
        <Loading loading={loading} css={loadingStyle} />
      </Box>
    );
  }
);

export const Button = createPolymorphicComponent<"button", ButtonProps>(
  ButtonComponent
);

const loadingStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
