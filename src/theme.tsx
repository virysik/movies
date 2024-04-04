"use client";

import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useMemo,
} from "react";
import { IconButton, PaletteMode, useMediaQuery } from "@mui/material";
import {
  alpha,
  createTheme,
  getContrastRatio,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from "@mui/material/styles";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { deepmerge } from "@mui/utils";
import { Roboto, Lusitana, Montserrat, Open_Sans } from "next/font/google";
import { green, purple } from "@mui/material/colors";

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
};

const primaryBase = "#000";
const primaryMain = alpha(primaryBase, 0.7);

const primaryDarkBase = "#fff";
const primaryDark = alpha(primaryDarkBase, 0.7);

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#f50057",
            // main: primaryMain,
            // light: alpha(primaryBase, 0.5),
            // dark: alpha(primaryBase, 0.9),
            // contrastText:
            //   getContrastRatio(primaryMain, "#fff") > 4.5 ? "#fff" : "#111",
          },
        }
      : {
          primary: {
            main: "#3f51b5",
            // main: primaryDark,
            // light: alpha(primaryDarkBase, 0.5),
            // dark: alpha(primaryDarkBase, 0.9),
            // contrastText:
            //   getContrastRatio(primaryDark, "#000") > 4.5 ? "#000" : "#EEEEEE",
          },
        }),
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

  const colorMode: ToggleProps = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const theme2 = useMemo(
    () => createTheme(deepmerge(getDesignTokens(mode), getComponents)),
    [mode]
  );

  // const theme1 = createTheme(deepmerge(options1, options2));

  //   const responsiveTheme = responsiveFontSizes(theme);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme2}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;
