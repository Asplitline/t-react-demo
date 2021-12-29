import React, { Component } from 'react';

const name = '1.jpg';
export default class Test extends Component {
  render() {
    return (
      <div>
        <img src={require('../src/assets/image/' + name).default} alt="" />
      </div>
    );
  }
}
