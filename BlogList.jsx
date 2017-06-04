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
        <TextBox description={this.props.text} />
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
        (item, key) => (
          <li key={key}><BlogItem src={item.src} text={item.text} /></li>
        )
      )
    )
  }
}

const blog_items = [
  {
    src: 'http://lorempixel.com/200/200',
    text: 'Blog 1'
  },
  {
    src: 'http://lorempixel.com/200/100',
    text: 'Blog 2'
  },
  {
    src: 'http://lorempixel.com/200/50',
    text: 'Blog 3'
  }

];

ReactDOM.render(
  <BlogList items={ blog_items } />,
  document.getElementById('app')
);
