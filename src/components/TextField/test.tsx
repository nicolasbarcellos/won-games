import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="email" labelFor="email" />)

    expect(screen.getByLabelText('email')).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('email')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Renders with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField onInput={onInput} label="email" labelFor="email" disabled />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    const text = 'my new text'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('Renders with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email />}
        label="email"
        labelFor="email"
        error="error message"
      />
    )

    expect(screen.getByText(/error message/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  // it('Is accessible by tab', () => {
  //   renderWithTheme(
  //     <TextField label="TextField" labelFor="TextField" id="TextField" />
  //   )

  //   const input = screen.getByLabelText('TextField')
  //   expect(document.body).toHaveFocus()

  //   userEvent.tab()
  //   expect(input).toHaveFocus()
  // })
})
