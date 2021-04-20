import * as S from './styles'

const Player = () => {
  return (
    <S.Wrapper>
      <header>
        <img src="/img/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>
      <S.EmptyPlayer>
        <strong>Selecione um podcast para ouvir</strong>
      </S.EmptyPlayer>

      <S.Footer empty>
        <S.Progress>
          <span>00:00</span>
          <S.Slider>
            <S.EmptySlider />
          </S.Slider>
          <span>00:00</span>
        </S.Progress>

        <S.Buttons>
          <button type="button">
            <img src="/img/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button">
            <img src="/img/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button type="button" className="playButton">
            <img src="/img/play.svg" alt="Tocar" />
          </button>
          <button type="button">
            <img src="/img/play-next.svg" alt="Tocar Próximo" />
          </button>
          <button type="button">
            <img src="/img/repeat.svg" alt="Repetir" />
          </button>
        </S.Buttons>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Player
