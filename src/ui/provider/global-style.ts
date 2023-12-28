import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  :root,
  :root.light{
    --foreground-rgb: 0, 0, 0;
    --main-color: black;
  }
  :root.dark{
    --forground-rgb: 255, 255, 255;
    --main-color: white;
  }
  
`;

