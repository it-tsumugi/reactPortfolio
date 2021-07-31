import { VFC } from "react";

import { StylesProvider } from "@material-ui/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./assets/styles/theme";

import { ComponentRouter } from "./ComponentRouter";

export const App: VFC = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ComponentRouter />
      </MuiThemeProvider>
    </StylesProvider>
  );
};
