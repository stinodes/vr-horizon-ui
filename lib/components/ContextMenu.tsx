/** @jsx jsx */
import { jsx, CSSObject } from '@emotion/core'
import {
  useMemo,
  useState,
  useRef,
  Fragment,
  ComponentType,
  SVGAttributes,
  ComponentPropsWithoutRef,
} from 'react'
import { useTransition, animated } from 'react-spring'
import { useOnEscPress } from '../hooks'
import { Flex } from './Flex'
import { FlexButton, Button } from './Button'
import { Text } from './Text'
import { Icon } from './Icons'
import { Portal } from './Portal'
import { Absolute } from './Absolute'
import { Card, CardProps } from './Card'
import { styled } from '../utils'
import Dots from './Icons/feather/more-horizontal.svg'
import { LayoutProps } from 'styled-system'

const AnimatedAbsolute = Absolute.withComponent(animated.div)
const Overlay = styled(Flex)({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 105,
})

type Props = {
  coordinates: null | { bottom?: boolean; x: number; y: number }
  onRequestClose: () => any
} & ComponentPropsWithoutRef<typeof Card>

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

  const key = useMemo(() => Math.random(), [])
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
  return (
    <Fragment>
      {transition.map(({ item, key, props }) => {
        if (!item) return null
        const position = {
          top: item.bottom ? undefined : item.y,
          bottom: item.bottom ? item.y : undefined,
          left: item.x,
        }
        return (
          <Portal key={`context-menu-portal_${key}`}>
            <Overlay key={`context-menu_${key}`} onClick={onRequestClose}>
              <AnimatedAbsolute style={props} {...position}>
                <Card
                  css={
                    {
                      maxHeight: maxHeight || MAX_HEIGHT,
                      overflowY: 'auto',
                      overflowX: 'hidden',
                    } as CSSObject
                  }
                  py={1}
                  size="small"
                  flexDirection="column"
                  shadow
                  bg="white"
                  width={width}
                  {...componentProps}>
                  {children}
                </Card>
              </AnimatedAbsolute>
            </Overlay>
          </Portal>
        )
      })}
    </Fragment>
  )
}
ContextMenu.WIDTH = DEFAULT_WIDTH
ContextMenu.MAX_HEIGHT = MAX_HEIGHT

type OverflowButtonProps = {
  children: Node
  width?: number
  color?: string
  bg?: string
  contextMenuBg?: string
  icon?: ComponentType<SVGAttributes<SVGElement>>
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
  const [coordinates, setCoordinates] = useState<null | {
    x: number
    y: number
  }>(null)
  const ref = useRef<null | HTMLButtonElement>(null)
  const onDotsClick = () => {
    const target = ref.current
    if (!target) return
    const { left: x = 0, top: y = 0 } = target.getBoundingClientRect() || {}
    setCoordinates({
      x: x - 133,
      y: y + 40 + 8,
    })
  }
  return (
    <Fragment>
      <Button
        ref={ref}
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
    </Fragment>
  )
}

export const ContextMenuItem = ({
  children,
  color,
  ...props
}: {
  children: Node
  onClick?: () => any
  color?: string
  to?: string
}) => (
  <FlexButton
    css={{ height: 36, flexShrink: 0 }}
    px={2}
    alignItems="center"
    {...props}>
    <Text color={color || 'darks.2'} fontSize={15}>
      {children}
    </Text>
  </FlexButton>
)
