const DOM = React.DOM;

const TextBox = ({ description }) => (
  DOM.span(null, description)
);

ReactDOM.render(
  <TextBox description="Hello!" />,
  document.getElementById('app')
);
