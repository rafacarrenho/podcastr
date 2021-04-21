import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'
import { EpisodeProps } from 'pages/episode/[slug]'

const EpisodeTemplate = ({ episode }: EpisodeProps) => {
  return (
    <S.Wrapper>
      <S.ThumbnailContainer>
        <Link href="/">
          <button type="button">
            <img src="/img/arrow-left.svg" alt="Voltar" />
          </button>
        </Link>
        <Image
          width={700}
          height={160}
          src={episode.thumbnail}
          objectFit="cover"
        />
        <button type="button">
          <img src="/img/play.svg" alt="Tocar episódio" />
        </button>
      </S.ThumbnailContainer>

      <S.Header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </S.Header>

      <S.Description
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </S.Wrapper>
  )
}

export default EpisodeTemplate
