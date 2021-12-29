import React from 'react';

const modeNames = {
  default: '*1',
  multiply: '*10',
};
class MyInput extends React.Component {
  constructor(props) {
    super(props);
  }
  numberChange = (e) => {
    this.props.onNumberChange(e.target.value);
  };
  render() {
    const { mode, number } = this.props;
    return (
      <fieldset>
        <legend>
          {number} {modeNames[mode]}
        </legend>
        <input value={number} onChange={this.numberChange} />
      </fieldset>
    );
  }
}

export default MyInput;
