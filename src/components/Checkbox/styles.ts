import styled, { css } from 'styled-components'
import { CheckBoxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

type LabelProps = Pick<CheckBoxProps, 'labelColor'>

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 0.2rem;
    border: 2px solid ${theme.colors.darkGray};
    transition: background border ${theme.transition.fast};
    appearance: none;
    cursor: pointer;
    outline: none;
    position: relative;

    &::after {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      transition: ${theme.transition.fast};
      opacity: 0;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      transition: ${theme.transition};

      &::after {
        opacity: 1;
      }
    }

    &:hover {
      border-color: ${theme.colors.gray};
      transition: ${theme.transition.fast};
    }
  `}
`

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1.8rem;
  `}
`
