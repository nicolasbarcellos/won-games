import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the button medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the button large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the button with a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  it('should render the button with a icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    const button = screen.getByText(/buy now/i)
    const buttonWithIcon = screen.getByTestId('icon')

    expect(button).toBeInTheDocument()
    expect(buttonWithIcon).toBeInTheDocument()
  })

  it('should render the button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    const button = screen.getByRole('link', { name: /buy now/i })

    expect(button).toHaveAttribute('href', '/link')
  })
})
