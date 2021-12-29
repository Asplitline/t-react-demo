import React, { Component } from 'react';
export default class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }

  onClickOutsideHandler(event) {
    // 点击元素内部，不关闭Option。cotains方法：判断target是否为toggleContainer的子元素
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div>
        <div ref={this.toggleContainer}>
          <button onClick={this.onClickHandler}>Select an option</button>
          {this.state.isOpen && (
            <ul>
              <li>Option 1</li>
              <li>
                Option 2<span>----------</span>
              </li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
        <div style={{ width: 400, height: 400, border: '1px solid #000' }}></div>
      </div>
    );
  }
}
