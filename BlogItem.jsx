const DOM = React.DOM;

const Image = (props) => (
  DOM.img({ ... props }, null)
);

const TextBox = ({ description }) => (
  DOM.span(null, description)
);

class BlogItem extends React.Component {
  render() {
    return (
      <div>
        <Image src={this.props.src} />
        <TextBox description="Blog Item"/>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
  <BlogItem src='http://lorempixel.com/200/200' />
  <BlogItem src='http://lorempixel.com/200/100' />
  <BlogItem src='http://lorempixel.com/200/50' />
  </div>,
  document.getElementById('app')
);
