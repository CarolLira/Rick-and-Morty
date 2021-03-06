import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes />
            </ThemeProvider>
        </>
    );
}

export default App;