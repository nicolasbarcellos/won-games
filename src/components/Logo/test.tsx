import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="logo" />)
    expect(container.querySelector('#paint_linear_logo')).toBeInTheDocument()
  })

  it('should render a white label by default', () => {
    // renderizar o componente
    renderWithTheme(<Logo />)
    // selecionar o elemento a ser testado
    const logo = screen.getByLabelText(/Won Games/i).parentElement
    // expect - assertion
    expect(logo).toHaveStyle({ color: '#fafafa' })
  })

  it('should render a black label by default', () => {
    renderWithTheme(<Logo color="black" />)
    const logo = screen.getByLabelText(/Won Games/i).parentElement
    expect(logo).toHaveStyle({ color: '#030517' })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    const logo = screen.getByLabelText(/Won Games/i).parentElement
    expect(logo).toHaveStyle({ width: '11rem', height: '3.3rem' })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    const logo = screen.getByLabelText(/Won Games/i).parentElement
    expect(logo).toHaveStyle({ width: '20rem', height: '5.9rem' })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile={true} />)
    const logo = screen.getByLabelText(/Won Games/i).parentElement
    expect(logo).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
