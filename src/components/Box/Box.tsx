import { forwardRef } from "react";
import { createPolymorphicComponent } from "../../helper";

export interface BoxProps {}

const BoxComponent = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <div>Box</div>;
});

export const Box = createPolymorphicComponent<"div", BoxProps>(BoxComponent);
