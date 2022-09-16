import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  initialValue?: string
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  icon,
  iconPosition = 'left',
  initialValue = '',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          iconPosition={iconPosition}
          id={labelFor}
          type="text"
          value={value}
          onChange={onChange}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
