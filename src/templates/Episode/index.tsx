import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";
import { EpisodeProps } from "pages/episode/[slug]";
import { usePlayer } from "contexts/PlayerContext";
import Head from "next/head";

const EpisodeTemplate = ({ episode }: EpisodeProps) => {
  const { play } = usePlayer();
  return (
    <S.Wrapper>
      <Head>
        <title>{episode.title}</title>
      </Head>
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
        <button type="button" onClick={() => play(episode)}>
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
  );
};

export default EpisodeTemplate;
