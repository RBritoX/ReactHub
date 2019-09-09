import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  html,
  body {
    min-width: 100%;
    min-height: 100%;
  }

  body {
    background: #EEEEEE;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 1.4rem 'Montserrat', Arial, Helvetica, sans-serif;
  }

  li {
    list-style: none;
  }

  a:link {
    color: #7159c1;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  button {
    cursor: pointer;
  }
`;
