import styled, { css } from 'styled-components'

type sizes = 'huge' | 'large' | 'medium' | 'small'

export type MediaMatchProps = {
  lessThan?: sizes
  greaterThan?: sizes
}

const breakpoints = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px'
}

const mediaMatchModifiers = {
  lessThan: (size: sizes) => css`
    @media (max-width: ${breakpoints[size]}) {
      display: block;
    }
  `,
  greaterThan: (size: sizes) => css`
    @media (min-width: ${breakpoints[size]}) {
      display: block;
    }
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
