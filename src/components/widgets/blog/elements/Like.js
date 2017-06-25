const Like = (props) => (
  <span>
    Likes: {props.likes}
    <button onClick={() => props.incrementLikes(props.id)}>Like</button>
  </span>
)
