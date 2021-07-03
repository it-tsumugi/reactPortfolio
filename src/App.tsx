import { ComponentRouter } from "./router/ComponentRouter";
import { StylesProvider } from '@material-ui/styles';
import {MuiThemeProvider} from '@material-ui/core/styles'

import {theme} from './assets/styles/theme'

export function App (){
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ComponentRouter />
      </MuiThemeProvider>
    </StylesProvider>
  );
};
