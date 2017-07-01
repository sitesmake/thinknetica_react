import React, { PropTypes } from 'react';

import { items } from 'constants/static/items';

import BlogItem from './BlogItem';

import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ items })
    );
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <BlogItem {...(this.state.items[this.props.params.id - 1])} />
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
