const DOM = React.DOM;

const Image = (props) => (
  DOM.img({
    src: props.src,
    width: props.width,
    height: props.height,
    alt: props.alt
    }, null)
);

const TextBox = (props) => (
  DOM.span(null, props.children)
);

class BlogItem extends React.Component {
  render() {
    return (
      <div>
        <Image
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
          alt={this.props.alt}
        />
        <TextBox>{this.props.description}</TextBox>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
  <BlogItem src='http://lorempixel.com/200/200' width="200" height="200" alt="Image 1" description="Blog Item 1" />
  <BlogItem src='http://lorempixel.com/200/100' width="200" height="100" alt="Image 2" description="Blog Item 2" />
  <BlogItem src='http://lorempixel.com/200/50' width="200" height="50" alt="Image 3" description="Blog Item 3" />
  </div>,
  document.getElementById('app')
);
