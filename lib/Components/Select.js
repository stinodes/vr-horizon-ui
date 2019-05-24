// @flow
import * as React from 'react'
import _Select from 'react-select'
import withProps from 'recompose/withProps'
import { Outline } from './Outline'
import { outline } from './styles'

const optionOutline = outline({
  focus: true,
  prop: 'outline',
})
const styleObject = {
  container: (provided, state) => ({
    flex: 1,
  }),
  control: (provided, state) => ({
    justifyContent: 'space-between',
    display: 'flex',
    border: 'none',
    outline: 'none',
    flex: 1,
    padding: '16px 32px',
    color: '#505659',
    fontSize: 20,
    fontFamily: 'Montserrat',
  }),
  valueContainer: (provided, state) => ({
    padding: 0,
  }),
  singleValue: provided => ({
    ...provided,
    color: '#505659',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  menu: provided => ({
    ...provided,
    background: '#f3f5f5',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
  }),
  optionList: (provided, state) => ({
    display: 'flex',
    flexDirection: 'column',
  }),
  option: (provided, state) => ({
    ...provided,
    ...optionOutline(
      ({
        outline: state.isFocused || state.isSelected,
        theme: {},
      }: any),
    ),
    fontFamily: 'Montserrat',
    background: state.isSelected ? 'Highlight' : 'transparent',
    width: 'auto',
    display: 'flex',
    alignSelf: 'stretch',
    margin: '0 1.5px',
    padding: '16px 32px',
    fontSize: 16,
    color: '#505659',
  }),
}
const SelectWithProps = withProps(props => ({ ...props, styles: styleObject }))(
  _Select,
)
export const Select = (props: typeof Select.props) => (
  <Outline>
    <SelectWithProps {...props} />
  </Outline>
)
