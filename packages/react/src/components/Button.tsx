import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    background: '$gray200',
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(.disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          background: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(.disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md'
  children?: React.ReactNode
  disabled?: boolean
  as?: ElementType
}

Button.displayName = 'Button'
