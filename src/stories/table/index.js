/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect, useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import { useSpring, animated } from 'react-spring'
import { prop, values } from 'ramda'
import {
  Table,
  HeaderText,
  CellText,
  Cell,
  Row,
  Absolute,
  EmptyTable,
} from '../../../lib'

storiesOf('Table', module)
  .add('default', () => {
    const userTableData = [
      {
        username: 'stinodes',
        job: 'Developer',
        github: 'https://www.github.com/stinodes',
      },
      {
        username: 'glowindadark',
        job: 'Founder & Developer',
        github: 'https://www.github.com/glowindadark',
      },
      { username: 'vr-horizon', job: 'Founder & Business', github: null },
      { username: 'tomtytgat', job: 'Photographer', github: null },
    ]

    const columns = [
      {
        Header: () => <HeaderText>Username</HeaderText>,
        accessor: 'username',
        Cell: cell => <CellText>{cell.value}</CellText>,
      },
      {
        Header: () => <HeaderText>Job</HeaderText>,
        accessor: 'job',
        Cell: cell => <CellText>{cell.value}</CellText>,
      },
      {
        Header: () => <HeaderText>GitHub Profile</HeaderText>,
        accessor: 'github',
        Cell: cell => (
          <CellText href={cell.value} color="blues.2">
            {cell.value ? 'Link to profile' : '-'}
          </CellText>
        ),
      },
    ]
    const showData = boolean('Show data', true)
    const loading = boolean('Loading', false)

    return (
      <Table
        headerStyle={{ background: 'white' }}
        getId={prop('username')}
        loading={loading}
        columns={columns}
        data={showData ? userTableData : []}
        emptyLabel="No users."
      />
    )
  })
  .add('custom rows', () => {
    const tasks = [
      {
        taskInfo: 'Task 1',
        steps: {
          todo: false,
          progress: false,
          done: false,
        },
      },
      {
        taskInfo: 'Task 2',
        steps: {
          todo: true,
          progress: true,
          done: false,
        },
      },
      {
        taskInfo: 'Task 3',
        steps: {
          todo: true,
          progress: true,
          done: false,
        },
      },
      {
        taskInfo: 'Task 4',
        steps: {
          todo: true,
          progress: true,
          done: true,
        },
      },
    ]

    const CustomRow = ({ row, ...props }) => {
      const rowsRef = useRef([])
      const [spring, set] = useSpring(() => ({ width: 0 }))
      useEffect(() => {
        const getCellWidth = cell => cell.getBoundingClientRect().width
        const steps = values(row.original.steps)
        const width = rowsRef.current.reduce(
          (width, cell, i) =>
            i === 0 || steps[i - 1] ? width + getCellWidth(cell) : width,
          0,
        )

        set({ width })
      }, [row.original.steps, set])

      return (
        <Row css={{ position: 'relative' }} {...props}>
          {row.cells.map((cell, i) => (
            <Cell
              {...cell.getCellProps()}
              ref={comp => (rowsRef.current[i] = comp)}>
              {cell.render('Cell')}
            </Cell>
          ))}
          <Absolute
            as={animated.div}
            style={spring}
            bottom={0}
            left={0}
            height={4}
            bg="blues.4"
          />
        </Row>
      )
    }
    const columns = [
      {
        Header: () => <HeaderText>Info</HeaderText>,
        accessor: 'taskInfo',
        Cell: cell => <CellText>{cell.value}</CellText>,
      },
      {
        Header: () => <HeaderText>Todo</HeaderText>,
        accessor: 'steps.todo',
        Cell: cell => <CellText>{cell.value ? 'Y' : 'N'}</CellText>,
      },
      {
        Header: () => <HeaderText>Todo</HeaderText>,
        accessor: 'steps.progress',
        Cell: cell => <CellText>{cell.value ? 'Y' : 'N'}</CellText>,
      },
      {
        Header: () => <HeaderText>Todo</HeaderText>,
        accessor: 'steps.done',
        Cell: cell => <CellText>{cell.value ? 'Y' : 'N'}</CellText>,
      },
    ]

    return (
      <EmptyTable
        getId={prop('taskInfo')}
        columns={columns}
        data={tasks}
        rowComponent={CustomRow}
        emptyLabel="No tasks."
      />
    )
  })
