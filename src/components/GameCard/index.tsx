import * as S from './styles'
import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Image from 'next/image'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({ title, developer, img, price }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Developer>{developer}</S.Developer>
      <S.FavButton role="button">
        <FavoriteBorder aria-label="Add to Wishlist" />
      </S.FavButton>
      <S.PriceBox>
        <S.Price>{price}</S.Price>
        <Button size="small" icon={<AddShoppingCart />} />
      </S.PriceBox>
    </S.Info>
  </S.Wrapper>
)

export default GameCard
