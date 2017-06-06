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
        <Image src={this.props.src} />
        <TextBox>{this.props.text}</TextBox>
      </div>
    )
  }
}

class BlogList extends React.Component {
  render() {
    return DOM.ul(
      null,
      _.map(
        this.props.items,
        (item) => (
          <li key={item.id}><BlogItem src={item.src} text={item.text} /></li>
        )
      )
    )
  }
}

const blogItems = [
  {
    src: 'http://lorempixel.com/200/200',
    text: 'Blog 1',
    id: 1
  },
  {
    src: 'http://lorempixel.com/200/100',
    text: 'Blog 2',
    id: 2
  },
  {
    src: 'http://lorempixel.com/200/50',
    text: 'Blog 3',
    id: 3
  }

];

ReactDOM.render(
  <BlogList items={ blogItems } />,
  document.getElementById('app')
);
