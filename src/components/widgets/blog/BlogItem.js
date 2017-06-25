const BlogItem = ({ image, meta, id, incrementLikes, text }) => (
  <div>
    <LoremPixelImage src={image.src} />
    <TextBox>
      {text},
      by: {meta.author},
      created at: {meta.createdAt},
      updated at: {meta.updatedAt},
      <Like likes={meta.likes} incrementLikes={incrementLikes} id={id}/>
    </TextBox>
  </div>
)

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
