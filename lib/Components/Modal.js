// @flow
// @jsx jsx
import { jsx } from '@emotion/core'
import * as React from 'react'
import styled from '@emotion/styled'
import { useTransition, animated } from 'react-spring'
import { DataRow, Card, Flex } from './Container'
import { Heading } from './Text'
import { FloatingButton } from './Button'
import { Icon } from './Icons'
import { useOnEscPress } from '../Hooks/utils'
import { ReactComponent as X } from './Icons/feather/x.svg'

const Overlay = styled(animated.div)(
  {
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
  },
  ({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .24)',
  }),
)
const ModalWindowAnimator = styled(animated.div)(
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
const ModalWindow = styled(Card.withComponent(animated.div))(
  {
    width: '95%',
    maxWidth: 672,
    maxHeight: '90vh',
    position: 'relative',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  ({ theme }) => ({
    backgroundColor: 'white',
  }),
)
const ModalHeader = styled(Flex)({
  flexShrink: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 16px',
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
  ({ theme: { colors } }) => ({
    borderTopColor: colors.lights[2],
  }),
)

type ModalState<Data> = {
  data: ?Data,
  visible: boolean,
  show: Data => void,
  hide: () => void,
  toggle: () => void,
}
export const useModalState = <Data>(): ModalState<Data> => {
  const [visible, setVisible] =
    // $FlowFixMe
    React.useState(false)
  const [data, setData] =
    // $FlowFixMe
    React.useState<?Data>(null)

  return {
    data,
    visible,
    show: (data: Data) => {
      setData(data)
      setVisible(true)
    },
    hide: () => setVisible(false),
    toggle: () => setVisible(!visible),
  }
}

export const useModalTransitions = (visible: boolean) => {
  const [isAnimating, setAnimating] =
    // $FlowFixMe
    React.useState(false)
  // $FlowFixMe
  React.useEffect(() => {
    visible && !isAnimating && setAnimating(true)
  }, [visible])
  const overlay = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const modal = useTransition(visible, null, {
    from: { transform: 'translateY(100%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(100%)' },
    onRest: () => isAnimating && setAnimating(false),
  })
  return { overlay, modal, isAnimating }
}

type Props = {
  visible: boolean,
  onRequestClose: () => any,
  title: string,
  children: React.Node,
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
                  <ModalWindow onClick={e => e.stopPropagation()} {...props}>
                    <ModalHeader>
                      <Heading
                        css={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                        tier="6">
                        {title}
                      </Heading>
                      <Flex alignItems="center">
                        <FloatingButton
                          bg="white"
                          width={32}
                          height={32}
                          onClick={onRequestClose}>
                          <Icon icon={X} size={24} color="accent" />
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
