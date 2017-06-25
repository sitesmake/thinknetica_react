import React from 'react';

const { PropTypes }  = React;

const Like = (props) => (
  <span>
    Likes: {props.likes}
    <button onClick={() => props.incrementLikes(props.id)}>Like</button>
  </span>
);

Like.propTypes = {
  likes: PropTypes.number,
  id: PropTypes.number,
  incrementLikes: PropTypes.func
};

export default Like;
