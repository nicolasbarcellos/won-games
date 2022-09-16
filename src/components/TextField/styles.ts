import styled, { css } from 'styled-components'
import { TextFieldProps } from '.'

type IconProps = Pick<TextFieldProps, 'iconPosition'>

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Icon = styled.div<IconProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'left' ? 0 : 1};
    & > svg {
      width: 100%;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: inline-block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
    padding-bottom: 0.4rem;
  `}
`

export const Wrapper = styled.div``
