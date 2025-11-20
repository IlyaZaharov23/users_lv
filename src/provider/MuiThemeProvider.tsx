"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

type ThemeProviderType = {
  children: React.ReactNode;
};

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function MuiThemeProvider({ children }: ThemeProviderType) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
