/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button } from './Button'
import { Icon } from './Icons'
import X from './Icons/X'
import { layout, flexbox, position } from 'styled-system'
import { styled } from '../utils'
import { Flex } from './Flex'
import { useState, useRef, useCallback } from 'react'

const DropArea = styled(Button)(
  layout,
  flexbox,
  position,
  {
    transition: 'background-color .2s ease, transform .2s ease',
  },
  ({ dragOver }) => ({
    transform: `scale(${dragOver ? 1.05 : 1})`,
  }),
)
const Input = styled('input')({ display: 'none' })

type Props = {
  value: null | File
  name: string
  onChange: (event: { target: { name: string; value: null | File } }) => any
  placeholder: string
  size?: null | 'small' | 'large'
  bg?: string
  color?: string
  disabled?: boolean
}
export const FileInput = ({
  onChange,
  name,
  value,
  placeholder,
  size,
  bg,
  color = 'white',
  disabled,
  ...props
}: Props) => {
  const [dragOver, setDragOver] = useState(false)
  const input = useRef<null | HTMLInputElement>(null)

  const onDragLeave = useCallback(
    e => {
      e.preventDefault()
      setDragOver(false)
    },
    [setDragOver],
  )
  const onDragEnter = useCallback(
    e => {
      e.preventDefault()
      setDragOver(true)
    },
    [setDragOver],
  )
  const onDrop = useCallback(
    e => {
      e.preventDefault()
      const files = e.dataTransfer.files
      setDragOver(false)
      if (!files || !files.length || !input.current) return
      if (!/^image\//.test(files[0].type) && !/\.pdf$/.test(files[0].type))
        return
      onChange({ target: { name, value: files[0] } })
    },
    [onChange, setDragOver],
  )

  const buttonProps = { bg, color, disabled, size }

  return (
    <Flex>
      <Flex pr={1}>
        <DropArea
          type="button"
          {...buttonProps}
          dragOver={dragOver}
          outline={dragOver}
          draggingOver={dragOver}
          onDragLeave={onDragLeave}
          onDragEnter={onDragEnter}
          onDragOver={e => e.preventDefault()}
          onClick={() => input.current && input.current.click()}
          onDrop={onDrop}>
          {!value ? placeholder : `"${value.name}"`}
        </DropArea>
      </Flex>
      {value && (
        <Button
          type="button"
          {...buttonProps}
          onClick={() => onChange({ target: { name, value: null } })}>
          <Icon icon={X} color="white" size={size === 'small' ? 14 : 20} />
        </Button>
      )}
      <Input
        type="file"
        ref={input}
        accept=".png,.jpg,.jpeg,.gif,.pdf"
        {...props}
        name={name}
        onChange={e => onChange({ target: { name, value: e.target.files[0] } })}
      />
    </Flex>
  )
}
