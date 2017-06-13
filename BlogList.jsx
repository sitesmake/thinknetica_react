const { DOM, PropTypes } = React;

const { bind } = _;

class LoremPixelImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Image
        src={this.props.src}
        width={(Number(this.props.src.split('/')[3]) || this.props.width)}
        height={(Number(this.props.src.split('/')[4]) || this.props.height)}
        alt={this.props.alt}
      />
    )
  }
}

LoremPixelImage.defaultProps = {
  src: 'http://lorempixel.com/50/50',
  width: 50,
  height: 50,
  alt: 'Lorem Ipsum'
}

LoremPixelImage.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      DOM.img({
        src: this.props.src,
        width: this.props.width,
        height: this.props.height,
        alt: this.props.alt
      }, null)
    )
  }
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

const TextBox = (props) => (
  DOM.span(null, props.children)
);

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: this.props.meta.likes };

    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <div>
        <LoremPixelImage src={this.props.image.src} />
        <TextBox>
          {this.props.text},
          by: {this.props.meta.author},
          created at: {this.props.meta.createdAt},
          updated at: {this.props.meta.updatedAt},
          likes: {this.state.likes}
          <button onClick={this.handleClick}>Like</button>
        </TextBox>
      </div>
    )
  }
}

BlogItem.defaultProps = {
  image: {
    src: 'http://lorempixel.com/50/50',
    width: 50,
    height: 50,
    alt: 'React - super!'
  },
  text: 'Untitled Blog',
  id: Date.now(),
  meta: {
    author: 'Me',
    createdAt: moment(0).format('lll'),
    updatedAt: moment().format('lll'),
    likes: 0
  }
}

BlogItem.propTypes = {
  image: PropTypes.shape(LoremPixelImage.propTypes),
  text: PropTypes.string,
  id: PropTypes.number,
  meta: PropTypes.shape({
    author: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    likes: PropTypes.number
  })
}

class BlogList extends React.Component {
  render() {
    return DOM.ul(
      null,
      _.map(
        this.props.items,
        (item) => (
          <li key={item.id}>
            <BlogItem {...item} />
          </li>
        )
      )
    )
  }
}

const blogItems = [
  {
    image: {
      src: 'http://lorempixel.com/200/200'
    },
    text: 'Blog 1',
    id: 1,
    meta: {
      author: 'Philosopher',
      createdAt: moment().subtract(2000, 'years').format('lll'),
      updatedAt: moment().format('lll'),
      likes: 2000
    }
  },
  {
    image: {
      src: 'http://lorempixel.com/200/100'
    },
    text: 'Blog 2',
    id: 2,
    meta: {
      author: 'Knight',
      createdAt: moment().subtract(500, 'years').format('lll'),
      updatedAt: moment().format('lll'),
      likes: 500
    }
  },
  {
    image: {
      src: 'http://lorempixel.com/200/50'
    },
    text: 'Blog 3',
    id: 3,
    meta: {
      author: 'Physicist',
      createdAt: moment().subtract(200, 'years').format('lll'),
      updatedAt: moment().format('lll'),
      likes: 200
    }
  }

];

ReactDOM.render(
  <BlogList items={ blogItems } />,
  document.getElementById('app')
);
