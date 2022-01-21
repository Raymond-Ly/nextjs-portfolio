import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import { ChildComponents } from '../types';
import GlobalStyles from './global';

const Theme = ({ children }: ChildComponents) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
