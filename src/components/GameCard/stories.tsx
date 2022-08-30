import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'
import 'next-image.mock'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/red-dead-bg.png',
    price: 'R$ 235,00'
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
)
