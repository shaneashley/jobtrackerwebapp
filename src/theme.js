// theme.js
import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#EAEFEF',
  text: '#363537',
  navBackground: '#d5d9d9',
  navText: '#363537',
  buttonBackground: '#547792',
  buttonText: '#FFFFFF',
};

export const darkTheme = {
  body: '#1A3263',
  text: '#FAFAFA',
  navBackground: '#0f1e3d',
  navText: '#FAFAFA',
  buttonBackground: '#ACBAC4',
  buttonText: '#FFFFFF',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.50s linear;
  }
`;