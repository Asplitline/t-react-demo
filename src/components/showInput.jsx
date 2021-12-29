import React from 'react';
import MyInput from './myInput';

function tryConvert(number, mode) {
  if (mode === 'default') {
    return number * 10;
  } else if (mode === 'multiply') {
    return number / 10;
  }
}
class ShowInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      mode: '',
    };
  }

  onDefaultChange = (number) => {
    this.setState({
      mode: 'default',
      number,
    });
  };
  onMultiplyChange = (number) => {
    this.setState({
      mode: 'multiply',
      number,
    });
  };

  render() {
    const { mode, number } = this.state;
    const a = mode === 'default' ? number : tryConvert(number, mode);
    const b = mode === 'multiply' ? number : tryConvert(number, mode);
    return (
      <div>
        <MyInput mode="default" number={a || ''} onNumberChange={this.onDefaultChange}></MyInput>
        <MyInput mode="multiply" number={b || ''} onNumberChange={this.onMultiplyChange}></MyInput>
      </div>
    );
  }
}

export default ShowInput;
