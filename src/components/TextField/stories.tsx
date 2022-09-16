import { Story, Meta } from '@storybook/react'
import TextField, { TextFieldProps } from '.'
import { Email } from '@styled-icons/material-outlined'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} icon={<Email />} />
  </div>
)

withIcon.argTypes = {
  icon: {
    type: { name: 'string' }
  }
}
