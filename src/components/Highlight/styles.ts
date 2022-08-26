import styled, { css } from 'styled-components'
import { HighLightProps } from '.'

type WrapperProps = Pick<HighLightProps, 'backgroundImage' | 'alignment'>

const wrapperModifers = {
  right: () => css`
    grid-template-areas: 'floatImage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatImage';
    grid-template-columns: 2fr 1.3fr;
    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    display: grid;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;

    @media (min-width: 768px) {
      height: 32rem;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${wrapperModifers[alignment!]()}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    grid-area: content;

    @media (min-width: 768px) {
      align-self: end;
      padding: ${theme.spacings.large};
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.large};
    }
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    grid-area: floatImage;
    align-self: end;

    @media (min-width: 768px) {
      max-height: 32rem;
    }
  `}
`
