import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
    font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, #__next {
    height: 100%;
  }

  h1,h2,h3,h4,h5,h6{
    font-weight: 600;
    font-family: Lexend, sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  body {
    font-family: Inter, sans-serif
  }
`

export default GlobalStyles
