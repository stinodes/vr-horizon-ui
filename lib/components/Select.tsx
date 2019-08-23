import React, { CSSProperties } from 'react'
import _Select from 'react-select'
import { Outline } from './Outline'
import { outline } from './styles'
import { SelectComponentsProps } from 'react-select/src/Select'

const optionOutline = outline({
  focus: true,
})
const styleObject = {
  container: () =>
    ({
      flex: 1,
    } as CSSProperties),
  control: () => ({
    justifyContent: 'space-between',
    display: 'flex',
    border: 'none',
    outline: 'none',
    flex: 1,
    padding: '8px 32px',
    color: '#505659',
    fontSize: 16,
    fontFamily: 'Montserrat',
  }),
  valueContainer: () =>
    ({
      padding: 0,
    } as CSSProperties),
  singleValue: (provided: CSSProperties) =>
    ({
      ...provided,
      color: '#505659',
    } as CSSProperties),
  indicatorSeparator: () => ({ display: 'none' }),
  menu: (provided: CSSProperties) =>
    ({
      ...provided,
      background: '#f3f5f5',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
    } as CSSProperties),
  optionList: () =>
    ({
      display: 'flex',
      flexDirection: 'column',
    } as CSSProperties),
  option: (
    provided: CSSProperties,
    state: { isFocused?: boolean; isSelected?: boolean },
  ) =>
    ({
      ...provided,
      ...optionOutline({
        outline: state.isFocused || state.isSelected,
        theme: {},
      } as any),
      fontFamily: 'Montserrat',
      background: state.isSelected ? 'Highlight' : 'transparent',
      width: 'auto',
      display: 'flex',
      alignSelf: 'stretch',
      margin: '0 1.5px',
      padding: '16px 32px',
      fontSize: 16,
      color: '#505659',
    } as CSSProperties),
}
export const Select = ({ styles, ...props }: SelectComponentsProps) => (
  <Outline>
    <_Select styles={styleObject} {...props} />
  </Outline>
)
