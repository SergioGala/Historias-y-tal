import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${props => {
    console.log('GlobalStyles props:', props);
    return '';
  }}

  body {
    font-family: ${props => {
      console.log('Theme in body:', props.theme);
      return props.theme?.typography?.fonts?.primary || 'sans-serif';
    }};
    background-color: ${props => props.theme?.colors?.background?.primary || '#fff'};
    color: ${props => props.theme?.colors?.text?.primary || '#000'};
    line-height: 1.5;
  }
`;

export default GlobalStyles;