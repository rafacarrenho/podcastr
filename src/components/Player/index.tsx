import { usePlayer } from "contexts/PlayerContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { convertDurationToTimeString } from "utils/convertDurationToTimeString";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    currentEpisodeIndex,
    episodeList,
    isPlaying,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    isLooping,
    toggleShuffling,
    isShuffling,
    toggleLoop,
    clearPlayerState,
  } = usePlayer();
  const episode = episodeList[currentEpisodeIndex];

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  const setupLoaderListener = () => {
    if (audioRef.current !== null) {
      audioRef.current.currentTime = 0;
      audioRef.current.addEventListener("timeupdate", (event) => {
        if (audioRef.current !== null) {
          setProgress(Math.floor(audioRef.current.currentTime));
        }
      });
    }
  };

  function handleSeek(amount: number) {
    if (audioRef.current !== null) {
      audioRef.current.currentTime = amount;
      setProgress(amount);
    }
  }

  const handleEpisodeEnded = () => {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  };

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
          <span>{convertDurationToTimeString(progress)}</span>
          <S.Slider>
            {episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: "#00ff3b" }}
                railStyle={{ backgroundColor: "#caffc9" }}
                handleStyle={{ borderColor: "#00ff3b", borderWidth: "3px" }}
              />
            ) : (
              <S.EmptySlider />
            )}
          </S.Slider>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </S.Progress>
        {episode && (
          <audio
            src={episode.url}
            autoPlay
            ref={audioRef}
            loop={isLooping}
            onEnded={handleEpisodeEnded}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupLoaderListener}
          />
        )}

        <S.Buttons>
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={() => toggleShuffling()}
            className={!!isShuffling ? "active" : ""}
          >
            <img src="/img/shuffle.svg" alt="Embaralhar" />
          </button>
          <button
            type="button"
            disabled={!episode || !hasPrevious}
            onClick={playPrevious}
          >
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
          <button
            type="button"
            disabled={!episode || !hasNext}
            onClick={playNext}
          >
            <img src="/img/play-next.svg" alt="Tocar Próximo" />
          </button>
          <button
            type="button"
            disabled={!episode}
            onClick={() => toggleLoop()}
            className={isLooping ? "active" : ""}
          >
            <img src="/img/repeat.svg" alt="Repetir" />
          </button>
        </S.Buttons>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Player;
