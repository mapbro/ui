import { createContext, ReactNode, useContext } from "react";

import { ThemeProvider } from "@emotion/react";
import { NormalizeCSS } from "../components/NormalizeCSS";
import { GlobalStyles } from "../components/GlobalStyles";
import { Theme, theme } from "../styles";

export interface DotorihamThemeProviderProps {
  children: ReactNode;
  withNormalize?: boolean;
  withGlobalStyle?: boolean;
}

export const MapbThemeProvider = ({
  children,
  withGlobalStyle,
  withNormalize,
}: DotorihamThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DotorihamThemeContext.Provider value={{ theme }}>
        {withNormalize && <NormalizeCSS />}
        {withGlobalStyle && <GlobalStyles />}
        {children}
      </DotorihamThemeContext.Provider>
    </ThemeProvider>
  );
};

export type ThemeContextProps = {
  theme: Theme;
};

const DotorihamThemeContext = createContext<ThemeContextProps>({
  theme,
});

export function useDotorihamTheme() {
  const value = useContext(DotorihamThemeContext);
  if (!value) {
    throw new Error(
      "useDotorihamTheme 은 DotorihamThemeProvider 내부에서 사용해야 합니다."
    );
  }
  return value;
}
