import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    const menu = screen.getByLabelText(/open menu/i)
    const search = screen.getByLabelText(/search/i)
    const shoppinhCart = screen.getByLabelText(/open shopping cart/i)

    expect(menu).toBeInTheDocument()
    expect(search).toBeInTheDocument()
    expect(shoppinhCart).toBeInTheDocument()
  })

  it('should render the logo', () => {
    renderWithTheme(<Menu />)

    const logo = screen.getByLabelText(/Won Games/i).parentElement

    expect(logo).toBeInTheDocument()
  })

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // selecionar menuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    // verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    // clicar no botao de abrir o menu e verificar se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })
    // clicar no botão de fechar o menu e verificar se fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/Minha conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Lista de desejos/i)).not.toBeInTheDocument()

    expect(screen.getByText(/Início/i)).toBeInTheDocument()
    expect(screen.getByText(/Explorar/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="nicolas" />)

    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/crie sua conta/i)).not.toBeInTheDocument()

    expect(screen.getByText(/Minha conta/i)).toBeInTheDocument()
    expect(screen.getByText(/Lista de desejos/i)).toBeInTheDocument()
  })
})
