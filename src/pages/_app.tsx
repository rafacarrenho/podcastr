import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import GlobalStyles from 'styles/global'
import Header from 'components/Header'
import Player from 'components/Player'
import * as S from '../styles/app.styles'
import { PlayerContext } from 'contexts/PlayerContext'

function App({ Component, pageProps }: AppProps) {
  const [currentTheme] = useState(false)
  const [episodeList, setEpisodeList] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  const play = (episode) => {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const setPlayingState = (state: boolean) => {
    setIsPlaying(state)
  }

  return (
    <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
      <PlayerContext.Provider
        value={{
          episodeList,
          currentEpisodeIndex,
          play,
          isPlaying,
          togglePlay,
          setPlayingState
        }}
      >
        <Head>
          <title>React Avançado - Boilerplate</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
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
      </PlayerContext.Provider>
    </ThemeProvider>
  )
}

export default App
