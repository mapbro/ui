import { forwardRef } from "react";
import { DefaultProps } from "../../types";
import { Box } from "../Box";
import { createPolymorphicComponent } from "../../helper";

export interface SwitchProps extends DefaultProps {}

const SwitchComponent = forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    return <Box as="input" />;
  }
);

export const Switch = createPolymorphicComponent<"input", SwitchProps>(
  SwitchComponent
);
