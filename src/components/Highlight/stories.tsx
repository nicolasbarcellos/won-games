import { Story, Meta } from '@storybook/react'
import Highlight, { HighLightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John´s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2',
    backgroundImage: '/img/red-dead-bg.png'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead.png'
}
