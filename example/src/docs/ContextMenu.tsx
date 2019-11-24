import React from 'react'
import { route } from 'navi'
import { Flex, MaxWidthBox, Heading, Icon, Card } from '../ui'
import { ExampleDocumentation } from './Doc'
import { Text } from '../ui'
import { OverflowButton } from '../ui'
import { ContextMenuItem } from '../ui'
import { ReactComponent as Trash } from '../components/feather/trash-2.svg'
import { ReactComponent as Edit } from '../components/feather/edit.svg'
import { ReactComponent as Add } from '../components/feather/plus.svg'
import { Accent } from '../components/Accent'

type Props = {}
const ContextMenuDocs = (props: Props) => {
  return (
    <Flex flexDirection="column">
      <MaxWidthBox>
        <Flex py={3}>
          <Heading>Context Menus and Dropdowns</Heading>
        </Flex>
        <Flex pb={3} width={{ sm: 1, lg: 1 / 2 }}>
          <Text>
            Context menus are useful when needing to display several actions,
            where real-estate is scarce.
            <br />
            This module provides several options to use out-of-the-box, or
            compose your own solutions.
            <br />
            <br />
            The menu is rendered in a portal. Make sure you add a div with{' '}
            <Accent>id="portal-root"</Accent> to your{' '}
            <Accent>index.html</Accent>-file!
          </Text>
        </Flex>
      </MaxWidthBox>
      <ExampleDocumentation title="Overflow Button" first center>
        <>
          <Card p={3} bg="white" shadow border>
            <OverflowButton>
              <ContextMenuItem right={<Icon size={16} icon={Add} />}>
                Add
              </ContextMenuItem>
              <ContextMenuItem right={<Icon size={16} icon={Edit} />}>
                Edit
              </ContextMenuItem>
              <ContextMenuItem right={<Icon size={16} icon={Trash} />}>
                Delete
              </ContextMenuItem>
            </OverflowButton>
          </Card>
        </>
      </ExampleDocumentation>
    </Flex>
  )
}
export default route({
  title: 'Context Menus | VR Horizon UI',
  view: <ContextMenuDocs />,
})
