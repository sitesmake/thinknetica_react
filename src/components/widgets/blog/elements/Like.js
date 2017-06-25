import React from 'react';

const { PropTypes }  = React;

import { Button } from 'semantic-ui-react';

const Like = (props) => (
  <span>
    Likes: {props.likes}
    <Button onClick={() => props.incrementLikes(props.id)}>Like</Button>
  </span>
);

Like.propTypes = {
  likes: PropTypes.number,
  id: PropTypes.number,
  incrementLikes: PropTypes.func
};

export default Like;
