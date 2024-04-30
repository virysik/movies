"use client";

import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { IconButton, PaletteMode, useMediaQuery } from "@mui/material";
import {
  alpha,
  createTheme,
  getContrastRatio,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
  useTheme,
  ThemeOptions,
} from "@mui/material/styles";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { deepmerge } from "@mui/utils";
import { Roboto, Lusitana, Montserrat, Open_Sans } from "next/font/google";

export function Toggler() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <IconButton onClick={colorMode?.toggleColorMode} color="inherit">
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const getComponents = {
  components: {
    // Name of the component
    //  MuiButton: {
    // styleOverrides: {
    // Name of the slot
    // root: {
    // Some CSS
    // fontSize: "1rem",
    //  },
    //  },
    //},
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
};

const primaryBase = "#701518";
const primaryMain = alpha(primaryBase, 0.7);
const primaryLight = alpha(primaryBase, 0.3);

const primaryDarkBase = "#fff";
const primaryDark = alpha(primaryDarkBase, 0.7);

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    // contrastThreshold: 4.5,

    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#fff",
            paper: "#fff",
          },
          text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)",
          },
          divider: "rgba(0, 0, 0, 0.12)",
          primary: {
            main: "#9d3c2b",
            light: "#dc5a41",
            dark: "#701518",
          },
          secondary: {
            main: "#fdd643",
            light: "#ffeb9e",
            dark: "#9d752b",
          },
          error: {
            main: "#d32f2f",
          },
          warning: {
            main: "#ed6c02",
          },
          info: {
            main: "#0288d1",
          },
          success: { main: "#2e7d32" },
        }
      : {
          background: {
            default: "#121212",
            paper: "#121212",
          },
          text: {
            primary: "rgba(255, 255, 255, 0.6)",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
          },
          divider: "rgba(255, 255, 255, 0.12)",
          primary: {
            main: "#664642",
            light: "#ada2a0",
            dark: "#2d1b1c",
          },
          secondary: {
            main: "#517776",
            light: "#a7bbb9",
            dark: "#1b2d2c",
          },
          error: {
            main: "#f44336",
          },
          warning: {
            main: "#ffa726",
          },
          info: { main: "#29b6f6" },
          success: { main: "#66bb6a" },
        }),
  },
  shape: {
    borderRadius: 6,
  },
});

interface ToggleProps {
  toggleColorMode: () => void;
}
const ColorModeContext = createContext<ToggleProps | undefined>(undefined);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light"
  );

  useEffect(() => {
    const selectedMode = prefersDarkMode ? "dark" : "light";
    if (mode !== selectedMode) {
      setMode(selectedMode);
    }
  }, [prefersDarkMode]);

  const colorMode: ToggleProps = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () => createTheme(deepmerge(getDesignTokens(mode), getComponents)),
    [mode]
  );

  const responsiveTheme = responsiveFontSizes(theme);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={responsiveTheme}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;
