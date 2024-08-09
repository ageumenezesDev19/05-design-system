import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@emerald-ui/react/'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repudiandae recusandae quisquam harum saepe suscipit nisi ab porro odit illo distinctio quaerat quod adipisci eligendi, ad ea atque? Consequatur, eveniet.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
