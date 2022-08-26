import styled, { css } from 'styled-components'

export const Wrapper = styled.article``

export const ImageBox = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 30rem;
    height: 14rem;
    background: ${theme.colors.black};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.black};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.black};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.black};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.black};
  `}
`

export const PriceBox = styled.div`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.black};
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    display: block;
    background: ${theme.colors.black};
  `}
`
