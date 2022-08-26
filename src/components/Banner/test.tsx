import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    const title = screen.getByRole('heading', { name: /Defy death/i })
    const subTitle = screen.getByRole('heading', {
      name: /Play the new CrashLands season/i
    })
    const img = screen.getByRole('img', { name: /Defy death/i })

    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(img).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
        hasRibbon
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
