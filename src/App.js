import React from 'react';
import logo from './logo.svg';
import GlobalStyle from './global-style';
import styled, { keyframes, ThemeProvider } from "styled-components";
import theme from "./theme";
import Content from "./Content";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledApp = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const Link = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Header>
          <Logo src={logo} alt="logo" />
          <Content/>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </Header>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
