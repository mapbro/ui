import { extractSystemStyles } from "../../utils";
import { BoxProps } from "./Box";

export const createStyles = (props: BoxProps) => {
  const { ...others } = props;
  const { rest, systemStyles } = extractSystemStyles(others);
  const styles = [systemStyles];

  return {
    styles,
    ...rest,
  };
};
