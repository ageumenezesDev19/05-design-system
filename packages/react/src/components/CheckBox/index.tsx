import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './style'
import { ComponentProps } from 'react'

export interface CheckBoxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckBoxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
