import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  h1,h2,h3,h4,h5,h6{
    font-weight: 600;
    font-family: Lexend, sans-serif;
  }

  body {
    font-family: Inter, sans-serif
  }
`

export default GlobalStyles
