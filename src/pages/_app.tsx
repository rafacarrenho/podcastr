import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import GlobalStyles from "styles/global";
import Header from "components/Header";
import Player from "components/Player";
import * as S from "../styles/app.styles";
import { useState } from "react";
import { PlayerContextProvider } from "contexts/PlayerContext";

function App({ Component, pageProps }: AppProps) {
  const [currentTheme] = useState(false);

  return (
    <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
      <PlayerContextProvider>
        <Head>
          <title>Podcastr - Sua aplicação de Musica em Next</title>
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
          <link
            rel="shortcut icon"
            href="/img/favicon.png"
            type="image/x-icon"
          />
        </Head>
        <GlobalStyles />
        <S.Wrapper>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </S.Wrapper>
      </PlayerContextProvider>
    </ThemeProvider>
  );
}

export default App;
