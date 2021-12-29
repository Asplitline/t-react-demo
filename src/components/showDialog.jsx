import React from 'react';
import Dialog from './dialog';
class ShowDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Dialog title="title" content="content" footer="footer"></Dialog>;
  }
}

export default ShowDialog;
