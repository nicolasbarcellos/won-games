import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // verficar se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    //verificar heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()
    //verificar se tem subtitle
    expect(
      screen.getByRole('heading', {
        name: /Won is the best and most complete gaming plataform./i
      })
    ).toBeInTheDocument()
    //verificar se tem o title do content
    expect(screen.getByRole('heading', { name: /Auth Title/i }))
    // verificar se o children esta sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    // verificar se footer esta sendo renderizado
    expect(
      screen.getByText(/Won Games 2022 © Todos os Direitos Reservados/i)
    ).toBeInTheDocument()
  })
})
