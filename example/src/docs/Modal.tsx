import React, { useState } from 'react'
import { route } from 'navi'
import { __, prop, assoc } from 'ramda'
import { Flex, MaxWidthBox, Heading, Modal, Button, ModalBody } from '../ui'
import { ExampleDocumentation } from './Doc'
import { ModalFooter } from '../ui'
import { Text } from '../ui'
import { ModalHeader } from '../ui'
import { Accent } from '../components/Accent'

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
        <Flex pb={3} width={{ sm: 1, lg: 1 / 2 }}>
          <Text>
            Modals are handy for displaying messages or forms without having to
            navigate or breaking up the page. These modals are, essentially,
            animated cards with some extra behavior and presentational
            components.
            <br />
            <br />
            You'll need to manage <Accent>visibility state</Accent>, and pass
            this to your modal to toggle it on or off. We also expose a{' '}
            <Accent>useModalState</Accent>-hook for you to use.
          </Text>
        </Flex>
      </MaxWidthBox>
      <ExampleDocumentation title="Simple modal" first center>
        <>
          <Button onClick={() => show('simple')}>Click to open</Button>
          <Modal
            height={200}
            visible={isVisible('simple')}
            onRequestClose={() => hide('simple')}>
            {null}
          </Modal>
        </>
      </ExampleDocumentation>
      <ExampleDocumentation title="Populated modal" center>
        <>
          <Button onClick={() => show('populated')}>Click to open</Button>
          <Modal
            visible={isVisible('populated')}
            onRequestClose={() => hide('populated')}>
            <ModalHeader>Example modal</ModalHeader>
            <ModalBody>
              <Text>
                You can display any content here. There's no limit in what can
                be rendered here, really.
              </Text>
            </ModalBody>
            <ModalFooter justifyContent="space-between">
              <Text>Continue when done</Text>
              <Button
                bg="primary"
                color="white"
                onClick={() => hide('populated')}>
                Continue
              </Button>
            </ModalFooter>
          </Modal>
        </>
      </ExampleDocumentation>
      <ExampleDocumentation title="Small" center>
        <>
          <Button onClick={() => show('small')}>Click to open</Button>
          <Modal
            small
            visible={isVisible('small')}
            onRequestClose={() => hide('small')}>
            <ModalBody>
              <Text>
                Your click was successful and this is a sweet alert message!
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                flex={1}
                bg="primary"
                color="white"
                size="small"
                onClick={() => hide('small')}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
        </>
      </ExampleDocumentation>
      <ExampleDocumentation title="Unavoidable modal" center>
        <>
          <Button onClick={() => show('unavoidable')}>Click to open</Button>
          <Modal visible={isVisible('unavoidable')}>
            <ModalBody alignItems="center">
              <Button
                bg="primary"
                color="white"
                onClick={() => hide('unavoidable')}>
                Continue
              </Button>
            </ModalBody>
          </Modal>
        </>
      </ExampleDocumentation>
    </Flex>
  )
}
export default route({
  title: 'Modal | VR Horizon UI',
  view: <ModalDocs />,
})
