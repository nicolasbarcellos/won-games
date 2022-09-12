import { ReactNode } from 'react'
import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium'
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper
    lineBottom={lineBottom}
    lineLeft={lineLeft}
    lineColor={lineColor}
    color={color}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
