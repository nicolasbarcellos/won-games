import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Buy now'
    },
    icon: {
      table: { disable: true }
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

export const withIcon: Story = (args) => <Button {...args} />

export const asLink: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
