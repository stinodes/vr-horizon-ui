/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment, useRef, useState, useEffect, ReactNode } from 'react'
import { useTransition, animated } from 'react-spring'
import { Heading } from './Text'
import { FloatingButton, FlexButton } from './Button'
import { Icon } from './Icons'
import { useOnEscPress } from '../hooks'
import X from './Icons/feather/x.svg'
import { styled, getColor } from '../utils'
import { Card } from './Card'
import { Flex } from './Flex'
import { LayoutProps, SpaceProps } from 'styled-system'

const Overlay = styled(animated.div)({
  zIndex: 110,
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  maxHeight: '100vh',
  maxWidth: '100vw',
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, .24)',
})
const ModalWindowAnimator = styled(animated.div)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  maxHeight: '100%',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})
const ModalWindow = styled(Card.withComponent(animated.div))<{
  small?: boolean
  bg?: string
}>(
  {
    maxWidth: 672,
    maxHeight: '90vh',
    position: 'relative',
    flexDirection: 'column',
    overflow: 'hidden auto',
  },
  ({ small }) => ({
    width: small ? 672 * 0.5 : '95vw',
  }),
)
export const ModalHeader = styled(Flex.withComponent(Heading))(({ theme }) => ({
  height: 72,
  borderBottom: `1px ${getColor('lights.1', theme)} solid`,
  alignItems: 'center',
  padding: '0 24px',
  fontSize: 20,
}))
ModalHeader.displayName = 'ModalHeader'
export const ModalFooter = styled(Flex)(({ theme }) => ({
  height: 72,
  borderTop: `1px ${getColor('lights.1', theme)} solid`,
  alignItems: 'center',
  padding: '0 24px',
}))
ModalFooter.displayName = 'ModalFooter'
export const ModalBody = styled(Flex)({
  flex: 1,
  flexDirection: 'column',
  overflowY: 'auto',
  padding: 24,
})
ModalBody.displayName = 'ModalBody'

type ModalState = {
  visible: boolean
  show: () => void
  hide: () => void
  toggle: () => void
}
export const useModal = (): ModalState => {
  const [visible, setVisible] = useState(false)

  return {
    visible,
    show: () => setVisible(true),
    hide: () => setVisible(false),
    toggle: () => setVisible(visible => !visible),
  }
}

export const useModalTransitions = (visible: boolean) => {
  const overlay = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const modal = useTransition(visible, null, {
    from: { transform: 'translateY(100%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(100%)' },
  })

  return { overlay, modal }
}

type Props = {
  visible: boolean
  small?: boolean
  onRequestClose?: () => any
  children: ReactNode
} & LayoutProps &
  SpaceProps
export const Modal = ({
  visible,
  onRequestClose,
  children,
  ...props
}: Props) => {
  const transition = useModalTransitions(visible)

  return (
    <Fragment>
      {transition.overlay.map(
        overlay =>
          overlay.item && (
            <Overlay onClick={onRequestClose} style={overlay.props}>
              {transition.modal.map(
                modal =>
                  modal.item && (
                    <ModalWindowAnimator style={modal.props}>
                      <ModalWindow
                        onClick={e => e.stopPropagation()}
                        bg="white"
                        {...props}>
                        {children}
                        {onRequestClose && (
                          <FlexButton
                            css={{ position: 'absolute', top: 8, right: 8 }}
                            bg="transparent"
                            onClick={onRequestClose}>
                            <Icon icon={X} size={24} color="darks.4" />
                          </FlexButton>
                        )}
                      </ModalWindow>
                    </ModalWindowAnimator>
                  ),
              )}
            </Overlay>
          ),
      )}
    </Fragment>
  )
}
