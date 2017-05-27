import React from 'react';
import Select from 'react-select'
import 'react-select/dist/react-select.min.css'

export default class Child extends React.Component {
  render() {
    return <Select options={[{ label: 'foo', value: 'foo' }]} />
  }
}
