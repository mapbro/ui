import { CSSProperties } from "react";

import { MapbNumberSize, MapbSize } from "./size";
import { MapbColors } from "../styles";

export type SystemProp<Value> =
  | Value
  | Partial<Record<MapbSize | (string & {}), Value>>;

export type SpacingValue = MapbNumberSize | (string & {});

export interface StyleSystemProps {
  m?: SystemProp<SpacingValue>;
  my?: SystemProp<SpacingValue>;
  mx?: SystemProp<SpacingValue>;
  mt?: SystemProp<SpacingValue>;
  mb?: SystemProp<SpacingValue>;
  ml?: SystemProp<SpacingValue>;
  mr?: SystemProp<SpacingValue>;

  p?: SystemProp<SpacingValue>;
  py?: SystemProp<SpacingValue>;
  px?: SystemProp<SpacingValue>;
  pt?: SystemProp<SpacingValue>;
  pb?: SystemProp<SpacingValue>;
  pl?: SystemProp<SpacingValue>;
  pr?: SystemProp<SpacingValue>;

  bg?: SystemProp<MapbColors>;
  c?: SystemProp<MapbColors>;

  w?: SystemProp<CSSProperties["width"]>;
  miw?: SystemProp<CSSProperties["minWidth"]>;
  maw?: SystemProp<CSSProperties["maxWidth"]>;
  h?: SystemProp<CSSProperties["height"]>;
  mih?: SystemProp<CSSProperties["minHeight"]>;
  mah?: SystemProp<CSSProperties["maxHeight"]>;

  pos?: SystemProp<CSSProperties["position"]>;
  top?: SystemProp<CSSProperties["top"]>;
  left?: SystemProp<CSSProperties["left"]>;
  bottom?: SystemProp<CSSProperties["bottom"]>;
  right?: SystemProp<CSSProperties["right"]>;
}
