// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { layout, flexBox, position } from './styles'
import { Flex } from './Container'
import { Button } from './Button'
import { Icon } from './Icons'
import { ReactComponent as X } from './Icons/feather/x.svg'

const DropArea = styled(Button)(
  layout,
  flexBox,
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
  value: ?File,
  name: string,
  onChange: Event => any,
  placeholder: string,
  size?: ?'small' | 'large',
}
export const FileInput = ({
  onChange,
  name,
  value,
  placeholder,
  size,
  ...props
}: Props) => {
  const [dragOver, setDragOver] = React.useState(false)
  const input = React.useRef()
  const onDragLeave = e => {
    e.preventDefault()
    setDragOver(false)
  }
  const onDragEnter = e => {
    e.preventDefault()
    setDragOver(true)
  }
  const onDrop = e => {
    e.preventDefault()
    const files = e.dataTransfer.files
    setDragOver(false)
    if (!files || !files.length || !input.current) return
    if (!/^image\//.test(files[0].type) && !/\.pdf$/.test(files[0].type)) return
    onChange(({ target: { name, value: files[0] } }: any))
  }

  return (
    <Flex>
      <Flex pr={2}>
        <DropArea
          type="button"
          size={size}
          bg={value ? 'primary' : 'lights.1'}
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
          size={size}
          onClick={() => onChange(({ target: { name, value: null } }: any))}>
          <Icon icon={X} color="white" size={size === 'small' ? 14 : 20} />
        </Button>
      )}
      <Input
        type="file"
        ref={input}
        accept=".png,.jpg,.jpeg,.gif,.pdf"
        {...props}
        name={name}
        onChange={e =>
          onChange(({ target: { name, value: e.target.files[0] } }: any))
        }
      />
    </Flex>
  )
}
