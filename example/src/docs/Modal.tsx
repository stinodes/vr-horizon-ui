import React, { useState } from 'react'
import { route } from 'navi'
import { __, prop, assoc } from 'ramda'
import { Flex, MaxWidthBox, Heading, Modal, Button } from '../ui'
import { ExampleDocumentation } from './Doc'

const useModals = () => {
  const [state, setState] = useState<{ [name: string]: boolean }>({})
  return {
    hide: (modal: string) => setState(assoc(modal, false)),
    show: (modal: string) => setState(assoc(modal, true)),
    isVisible: prop(__, state),
  }
}

type Props = {}
const ModalDocs = (props: Props) => {
  const { isVisible, hide, show } = useModals()
  return (
    <Flex flexDirection="column">
      <MaxWidthBox>
        <Flex py={3}>
          <Heading>Modals</Heading>
        </Flex>
      </MaxWidthBox>
      <ExampleDocumentation title="Simple modal" first center>
        <Flex>
          <Button onClick={() => show('simple')}>Click to open</Button>
          <Modal
            height={200}
            visible={isVisible('simple')}
            onRequestClose={() => hide('simple')}>
            {null}
          </Modal>
        </Flex>
      </ExampleDocumentation>
      <ExampleDocumentation title="Populated modal" first center>
        <Flex>
          <Button onClick={() => show('populated')}>Click to open</Button>
          <Modal
            height={200}
            visible={isVisible('populated')}
            onRequestClose={() => hide('populated')}>
            {null}
          </Modal>
        </Flex>
      </ExampleDocumentation>
    </Flex>
  )
}
export default route({
  title: 'Modal | VR Horizon UI',
  view: <ModalDocs />,
})
