/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  useState,
  useRef,
  useCallback,
  SyntheticEvent,
  DragEvent,
  ComponentPropsWithRef,
} from 'react'
import { path } from 'ramda'
import { Button } from './Button'
import { Icon } from './Icons'
import X from './Icons/feather/x.svg'
import { styled, StyledComponent } from '../utils'
import { Flex } from './Flex'

const DropArea: StyledComponent<
  ComponentPropsWithRef<typeof Button>,
  {
    dragOver: boolean
    draggingOver: boolean
    outline?: boolean | string
  }
> = styled(Button)(
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
  size?: 'small' | 'regular'
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
          onDragOver={(e: DragEvent<HTMLButtonElement>) => e.preventDefault()}
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
        onChange={e =>
          onChange({
            target: { name, value: path(['target', 'files', 0], e) || null },
          })
        }
      />
    </Flex>
  )
}
