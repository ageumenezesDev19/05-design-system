import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@emerald-ui/react/'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/ageumenezesDev19.png?s=48',
    alt: 'Ageu Menezes',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
