import { createContext, ReactNode, useContext } from "react";

import { ThemeProvider } from "@emotion/react";
import { NormalizeCSS } from "../components/NormalizeCSS";
import { GlobalStyles } from "../components/GlobalStyles";
import { Theme, theme } from "../styles";

export interface MapbThemeProviderProps {
  children: ReactNode;
  withNormalize?: boolean;
  withGlobalStyle?: boolean;
}

export const MapbThemeProvider = ({
  children,
  withGlobalStyle,
  withNormalize,
}: MapbThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MapbThemeContext.Provider value={{ theme }}>
        {withNormalize && <NormalizeCSS />}
        {withGlobalStyle && <GlobalStyles />}
        {children}
      </MapbThemeContext.Provider>
    </ThemeProvider>
  );
};

export type ThemeContextProps = {
  theme: Theme;
};

const MapbThemeContext = createContext<ThemeContextProps>({
  theme,
});

export function useMapbTheme() {
  const value = useContext(MapbThemeContext);
  if (!value) {
    throw new Error(
      "useMapbTheme 은 MapbThemeProvider 내부에서 사용해야 합니다."
    );
  }
  return value;
}
