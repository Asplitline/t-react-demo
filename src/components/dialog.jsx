import Content from './content';

function Dialog(props) {
  return (
    <Content color="blue">
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
      <div className="footer">{props.footer}</div>
    </Content>
  );
}

export default Dialog;
