import React, { Component } from 'react';
import { TextContext } from './TextContext';
export default class Button extends Component {
  static contextType = TextContext;
  render() {
    return <div>{this.context}</div>;
  }
}
