import React, { Component, createContext } from 'react';

export const TextContext = createContext('text');

export default class TextContextProvider extends Component {
  render() {
    return <TextContext.Provider value="123">{this.props.children}</TextContext.Provider>;
  }
}
