import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const { container } = renderWithTheme(<Footer />)

    const contact = screen.getByRole('heading', { name: 'Contact' })
    const followUs = screen.getByRole('heading', { name: 'Follow Us' })
    const links = screen.getByRole('heading', { name: 'Links' })
    const location = screen.getByRole('heading', { name: 'Location' })

    expect(contact).toBeInTheDocument()
    expect(followUs).toBeInTheDocument()
    expect(links).toBeInTheDocument()
    expect(location).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
