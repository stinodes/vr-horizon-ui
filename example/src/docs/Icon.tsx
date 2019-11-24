import React from 'react'
import { route } from 'navi'
import { Flex, MaxWidthBox, Heading, Icon, Card } from '../ui'
import { ExampleDocumentation } from './Doc'
import { Text } from '../ui'
import { Link } from '../components/Link'
import { ReactComponent as Activity } from '../components/feather/activity.svg'
import { ReactComponent as Bell } from '../components/feather/bell.svg'
import { ReactComponent as Home } from '../components/feather/home.svg'
import { ReactComponent as Volume } from '../components/feather/volume.svg'

type Props = {}
const IconDocs = (props: Props) => {
  return (
    <Flex flexDirection="column">
      <MaxWidthBox>
        <Flex py={3}>
          <Heading>Icons</Heading>
        </Flex>
        <Flex pb={3} width={{ sm: 1, lg: 1 / 2 }}>
          <Text>
            Although it isn't this module's purpose do provide icon-sets, it
            does provide a component to display them.
            <br />
            This component takes an exported SVG-Component, and applies some
            styling and normalization.
            <br />
            <br />
            These are tested using{' '}
            <Link href="https://feathericons.com/" target="_blank">
              Feather Icons
            </Link>
            .
          </Text>
        </Flex>
      </MaxWidthBox>
      <ExampleDocumentation title="Feather Icons Example" first center>
        <>
          <Card p={3} bg="white" shadow border>
            <Icon icon={Activity} color="primary" size={32} />
            <Icon icon={Bell} color="yellows.2" size={32} />
            <Icon icon={Home} color="darks.2" size={32} />
            <Icon icon={Volume} color="reds.2" size={32} />
          </Card>
        </>
      </ExampleDocumentation>
    </Flex>
  )
}
export default route({
  title: 'Icons | VR Horizon UI',
  view: <IconDocs />,
})
