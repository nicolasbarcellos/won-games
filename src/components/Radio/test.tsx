import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    renderWithTheme(<Radio label="radio" />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText('radio')).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render with label (black)', () => {
    renderWithTheme(<Radio label="radio" labelColor="black" />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByText('radio')).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio
        label="radio"
        labelFor="radio"
        onCheck={onCheck}
        value="any value"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText('radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('any value')
  })

  // it('should be acessible with tab', () => {
  //   renderWithTheme(<Radio label="radio" labelFor="radio" />)

  //   expect(document.body).toHaveFocus()

  //   userEvent.tab()

  //   expect(screen.getByLabelText('radio')).toHaveFocus()
  // })
})
