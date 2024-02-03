import React from 'react';
import AppToolbar from '../AppToolbar/AppToolbar';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../../theme';


const Layout: React.FC<React.PropsWithChildren>  = ({children}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <header>
          <AppToolbar/>
        </header>
        <main>
          <Container maxWidth="xl">
            {children}
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;