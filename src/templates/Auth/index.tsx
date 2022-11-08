import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import { ReactNode } from 'react'
import * as S from './styles'

type AuthProps = {
  title: string
  children: ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.BannerSubtitle>
            <strong>WON</strong> is the best and most complete gaming plataform.
          </S.BannerSubtitle>
        </div>
        <S.BannerFooter>
          Won Games 2022 © Todos os Direitos Reservados
        </S.BannerFooter>
      </S.BannerContent>
    </S.BannerBlock>
    <S.FormBlock>
      <S.FormWrapper>
        <Link href="/">
          <a>
            <Logo id="form" color="black" size="large" />
          </a>
        </Link>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.FormWrapper>
    </S.FormBlock>
  </S.Wrapper>
)

export default Auth
