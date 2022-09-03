import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
    width: 100%;
    height: 100%;
    display: grid;
  `}
`

export const ImageBox = styled.a`
  position: relative;
  min-height: 14rem;
  width: 100%;
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    padding: ${theme.spacings.xsmall};
    display: grid;
    grid-template-columns: 1fr 2.5rem;
  `}
`

export const Info = styled.a`
  word-break: break-all;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    line-height: ${theme.font.sizes.xlarge};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    line-height: ${theme.font.sizes.large};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    justify-self: end;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`

export const PriceBox = styled.div`
  ${({ theme }) => css`
    justify-self: end;
    grid-column: 1/-1;
    display: flex;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    margin-right: 0.4rem;
  `,
  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.xlarge};
    display: flex;
    align-items: center;

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`
