import React from "react";
import { MapbThemeProvider } from "../src/context/MapbThemeProvider";

const decorators = [
  (Story) => (
    <div style={{ height: "100%", width: "100%" }}>
      <MapbThemeProvider withGlobalStyle withNormalize>
        <Story />
      </MapbThemeProvider>
    </div>
  ),
];

export default decorators;
