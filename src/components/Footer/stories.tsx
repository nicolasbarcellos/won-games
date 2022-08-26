import { Story, Meta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
