import { ReactNode, forwardRef } from "react";
import { createPolymorphicComponent } from "../../helper";
import { DefaultProps } from "../../types";
import { createStyles } from "./Box.styles";

export interface BoxProps extends DefaultProps {
  children?: ReactNode;
}

const BoxComponent = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { styles, as, children, ...rest } = createStyles(props);
  const BoxElement = as ?? "div";

  return (
    <BoxElement ref={ref} css={styles} {...rest}>
      {children}
    </BoxElement>
  );
});

export const Box = createPolymorphicComponent<"div", BoxProps>(BoxComponent);
