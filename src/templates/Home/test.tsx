import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighlight: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGamesHighlight: highlightMock,
  freeGames: gamesMock
}

import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />)

    expect(
      screen.getByRole('heading', { name: /New Releases/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Most Populars/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Coming Soon/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument()
  })
})
