// @jsx jsx
import { jsx } from '@emotion/core'
import React, { useRef, useState, useEffect, ReactNode } from 'react'
import { useTransition, animated } from 'react-spring'
import { Heading } from './Text'
import { FloatingButton } from './Button'
import { Icon } from './Icons'
import { useOnEscPress } from '../hooks'
import X from './Icons/feather/x.svg'
import { styled, getColor } from '../utils'
import { Card } from './Card'
import { Flex } from './Flex'

const H6 = Heading.withComponent('h6')
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
const ModalWindowAnimator = styled(animated.div)<{ isAnimating?: boolean }>(
  {
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
  },
  ({ isAnimating }) => ({ overflowY: isAnimating ? 'hidden' : 'scroll' }),
)
const ModalWindow = styled(Card.withComponent(animated.div))({
  width: '95%',
  maxWidth: 672,
  maxHeight: '90vh',
  position: 'relative',
  flexDirection: 'column',
  overflow: 'hidden',
})
const ModalHeader = styled(Flex)({
  flexShrink: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 32px',
  height: 72,
})

export const ModalFooter = styled(Flex)(
  {
    height: 72,
    flexShrink: 0,
    padding: '0 16px',
    borderTop: '1px solid transparent',
    alignItems: 'center',
    overflow: 'hidden',
  },
  ({ theme }) => ({
    borderTopColor: getColor('lights.2', theme),
  }),
)

type ModalState<Data> = {
  data: null | Data
  visible: boolean
  show: (data: Data) => void
  hide: () => void
  toggle: () => void
}
export const useModalState = <Data extends any>(): ModalState<Data> => {
  const [visible, setVisible] = useState(false)
  const dataRef = useRef<null | Data>(null)

  return {
    data: dataRef.current,
    visible,
    show: (data: Data) => {
      dataRef.current = data
      setVisible(true)
    },
    hide: () => setVisible(false),
    toggle: () => setVisible(!visible),
  }
}

export const useModalTransitions = (visible: boolean) => {
  const [isAnimating, setAnimating] = useState(false)
  useEffect(() => {
    visible && !isAnimating && setAnimating(true)
  }, [visible])

  const overlay = useTransition(visible, null, {
    opacity: 0,
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const modal = useTransition(visible, null, {
    transform: 'translateY(100%)',
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(100%)' },
    onRest: () => isAnimating && setAnimating(false),
  })

  return { overlay, modal, isAnimating }
}

type Props = {
  visible: boolean
  onRequestClose: () => any
  title: string
  children: ReactNode
}
export const Modal = ({
  visible,
  title,
  onRequestClose,
  children,
  ...props
}: Props) => {
  useOnEscPress(onRequestClose, visible)

  const transition = useModalTransitions(visible)

  return transition.overlay.map(
    overlay =>
      overlay.item && (
        <Overlay key="overlay" onClick={onRequestClose} style={overlay.props}>
          {transition.modal.map(
            modal =>
              modal.item && (
                <ModalWindowAnimator
                  key="modal-animator"
                  style={modal.props}
                  isAnimating={transition.isAnimating}>
                  <ModalWindow
                    onClick={e => e.stopPropagation()}
                    bg="white"
                    {...props}>
                    <ModalHeader>
                      <H6
                        css={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}>
                        {title}
                      </H6>
                      <Flex alignItems="center">
                        <FloatingButton
                          bg="white"
                          width={32}
                          height={32}
                          onClick={onRequestClose}>
                          <Icon icon={X} size={24} color="primary" />
                        </FloatingButton>
                      </Flex>
                    </ModalHeader>
                    {children}
                  </ModalWindow>
                </ModalWindowAnimator>
              ),
          )}
        </Overlay>
      ),
  )
}
