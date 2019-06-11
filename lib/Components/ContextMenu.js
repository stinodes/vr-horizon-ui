// @flow
/** @jsx jsx */
import { jsx } from '@emotion/core'
// eslint-disable-next-line
import React from 'react'
import { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { useTransition, animated } from 'react-spring'
import {
  Text,
  BaseButton,
  Button,
  Icon,
  Card,
  Portal,
  Flex,
  Absolute,
} from '../Components'
import Dots from './Icons/MoreHorizontal'
import { useOnEscPress } from '../Hooks'
import type { ComponentType, Node } from 'react'

const Overlay = styled(Flex)({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 105,
})

type Props = {
  coordinates: ?{ bottom?: boolean, x: number, y: number },
  width?: number,
  maxHeight?: number | string,
  onRequestClose: () => any,
  children: Node,
}
const DEFAULT_WIDTH = 210
const MAX_HEIGHT = 210
export const ContextMenu = ({
  width = DEFAULT_WIDTH,
  children,
  coordinates,
  onRequestClose,
  maxHeight,
  ...props
}: Props) => {
  useOnEscPress(onRequestClose, !!coordinates)

  const key = React.useMemo(() => Math.random(0, 1000000), [])
  const transition = useTransition(coordinates, null, {
    config: { tension: 278, clamp: true },
    from: {
      opacity: 0,
    },
    leave: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
  })
  const componentProps = props
  return transition.map(({ item, key, props }) => {
    if (!item) return null
    const position = {
      top: item.bottom ? undefined : item.y,
      bottom: item.bottom ? item.y : undefined,
      left: item.x,
    }
    return (
      <Portal key={`context-menu-portal_${key}`}>
        <Overlay key={`context-menu_${key}`} onClick={onRequestClose}>
          <Absolute as={animated.div} style={props} {...position}>
            <Card
              css={{
                maxHeight: maxHeight || MAX_HEIGHT,
                overflowY: 'auto',
                overflowX: 'hidden',
              }}
              py={1}
              size="small"
              flexDirection="column"
              shadow
              bg="white"
              width={width}
              {...componentProps}>
              {children}
            </Card>
          </Absolute>
        </Overlay>
      </Portal>
    )
  })
}
ContextMenu.WIDTH = DEFAULT_WIDTH
ContextMenu.MAX_HEIGHT = MAX_HEIGHT

type OverflowButtonProps = {
  children: Node,
  width?: number,
  color?: string,
  bg?: string,
  contextMenuBg?: string,
  icon?: ComponentType<*>,
}
export const OverflowButton = ({
  children,
  width,
  icon,
  color,
  bg,
  contextMenuBg,
  ...props
}: OverflowButtonProps) => {
  const [coordinates, setCoordinates] = useState(null)
  const ref = useRef()
  const onDotsClick = () => {
    if (!ref.current) return
    const { left: x, top: y } = ref.current.getBoundingClientRect()
    setCoordinates({
      x: x - 133,
      y: y + 40 + 8,
    })
  }
  return (
    <>
      <Button
        innerRef={ref}
        onClick={onDotsClick}
        bg={bg || 'primary'}
        size="circle"
        {...props}>
        <Icon icon={icon || Dots} size={20} color={color || 'white'} />
      </Button>
      <ContextMenu
        width={width}
        coordinates={coordinates}
        bg={contextMenuBg}
        onRequestClose={() => setCoordinates(null)}>
        {children}
      </ContextMenu>
    </>
  )
}
export const ContextMenuItem = ({
  children,
  color,
  ...props
}: {
  children: Node,
  onClick?: () => any,
  color?: string,
  to?: string,
}) => (
  <BaseButton
    css={{ height: 36, flexShrink: 0 }}
    px={2}
    alignItems="center"
    {...props}>
    <Text color={color || 'darks.2'} fontSize={15}>
      {children}
    </Text>
  </BaseButton>
)
