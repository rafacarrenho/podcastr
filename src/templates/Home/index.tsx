import { HomeProps } from "pages";
import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";
import { usePlayer } from "contexts/PlayerContext";

const HomeTemplate = ({ latestEpisodes, allEpisodes }: HomeProps) => {
  const { playList } = usePlayer();

  const episodeList = [...latestEpisodes, ...allEpisodes];
  return (
    <S.Wrapper>
      <S.LastestEpisodes>
        <h2>Ultimos lançamentos</h2>
        <ul>
          {latestEpisodes.map((episode, index) => {
            return (
              <li key={episode.id}>
                <Image
                  width={350}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />
                <S.EpisodesDetails>
                  <Link href={`/episode/${episode.id}`}>
                    <a href="">{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span>{episode.durationAsString}</span>
                </S.EpisodesDetails>
                <button
                  type="button"
                  onClick={() => playList(episodeList, index)}
                >
                  <img src="/img/play-green.svg" alt="Play" />
                </button>
              </li>
            );
          })}
        </ul>
      </S.LastestEpisodes>
      <S.AllEpisodes>
        <h2>Todos os episódios</h2>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((episode, index) => (
              <tr key={episode.id}>
                <td style={{ width: 80 }}>
                  <Image
                    width={120}
                    height={120}
                    src={episode.thumbnail}
                    alt={episode.title}
                    objectFit="cover"
                  />
                </td>
                <td>
                  <Link href={`/episode/${episode.id}`}>
                    <a> {episode.title}</a>
                  </Link>
                </td>
                <td>{episode.members}</td>
                <td style={{ width: 100 }}>{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      playList(episodeList, index + latestEpisodes.length)
                    }
                  >
                    <img src="/img/play-green.svg" alt="Tocar episódio" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.AllEpisodes>
    </S.Wrapper>
  );
};

export default HomeTemplate;
