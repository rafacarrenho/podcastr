import * as S from './styles'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import Link from 'next/link'

const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })

  return (
    <S.Wrapper>
      <Link href="/">
        <a>
          <img
            src="/img/logo.svg"
            alt="Logo Podcastr - foto do fone de ouvido seguido por texto escrito por extenso"
          />
        </a>
      </Link>

      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </S.Wrapper>
  )
}

export default Header
