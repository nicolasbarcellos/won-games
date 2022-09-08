import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1'
    },
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />
