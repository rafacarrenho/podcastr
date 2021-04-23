import { PlayerContext } from 'contexts/PlayerContext'
import Image from 'next/image'
import { useContext, useEffect, useRef } from 'react'
import * as S from './styles'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Player = () => {
  const {
    currentEpisodeIndex,
    episodeList,
    isPlaying,
    togglePlay,
    setPlayingState
  } = useContext(PlayerContext)
  const episode = episodeList[currentEpisodeIndex]

  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) {
      return
    }
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <S.Wrapper>
      <header>
        <img src="/img/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora {episode?.title}</strong>
      </header>
      {episode ? (
        <S.CurrentEpisode>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </S.CurrentEpisode>
      ) : (
        <S.EmptyPlayer>
          <strong>Selecione um podcast para ouvir</strong>
        </S.EmptyPlayer>
      )}

      <S.Footer empty={!episode}>
        <S.Progress>
          <span>00:00</span>
          <S.Slider>
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: '#00ff3b' }}
                railStyle={{ backgroundColor: '#caffc9' }}
                handleStyle={{ borderColor: '#00ff3b', borderWidth: '3px' }}
              />
            ) : (
              <S.EmptySlider />
            )}
          </S.Slider>
          <span>00:00</span>
        </S.Progress>

        {episode && (
          <audio
            src={episode.url}
            autoPlay
            ref={audioRef}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <S.Buttons>
          <button type="button" disabled={!episode}>
            <img src="/img/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/img/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button
            type="button"
            className="playButton"
            disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <img src="/img/pause.svg" alt="Tocar" />
            ) : (
              <img src="/img/play.svg" alt="Tocar" />
            )}
          </button>
          <button type="button" disabled={!episode}>
            <img src="/img/play-next.svg" alt="Tocar Próximo" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/img/repeat.svg" alt="Repetir" />
          </button>
        </S.Buttons>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Player
