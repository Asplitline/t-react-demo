import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';
import TextContext from './TextContext';
console.log(TextContext);
export default class ContextDemo extends Component {
  render() {
    return (
      <TextContext>
        <ButtonGroup></ButtonGroup>
      </TextContext>
    );
  }
}
