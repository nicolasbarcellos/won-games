import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`

type LabelProps = Pick<RadioProps, 'labelColor'>

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    appearance: none;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    background: transparent;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &::after {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      background: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      border-radius: 50%;
      opacity: 0;
    }

    &:checked {
      &::after {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    cursor: pointer;
    line-height: 1.8rem;
  `}
`
