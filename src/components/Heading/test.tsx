import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading>Heading</Heading>)

    const heading = screen.getByRole('heading', { name: /Heading/i })

    expect(heading).toBeInTheDocument()
  })

  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)

    const heading = screen.getByRole('heading', { name: /Heading/i })

    expect(heading).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Heading</Heading>)

    const heading = screen.getByRole('heading', { name: /Heading/i })

    expect(heading).toHaveStyle({ color: '#030517' })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(
      <Heading color="white" lineLeft={true}>
        Heading
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Heading/i })

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(
      <Heading color="white" lineBottom={true}>
        Heading
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Heading/i })

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Heading</Heading>)

    const heading = screen.getByRole('heading', { name: /Heading/i })

    expect(heading).toHaveStyle({ 'font-size': '1.6rem' })
  })

  it('should render a heading with a small line at the bottom', () => {
    renderWithTheme(
      <Heading color="white" size="small" lineBottom={true}>
        Heading
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Heading/i })

    expect(heading).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Heading
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Heading/i })

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })
})
