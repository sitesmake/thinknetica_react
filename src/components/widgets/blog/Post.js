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
      () => this.setState({ items })
    );
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const items = this.state.items;
    const index = items.findIndex(item => item.id == this.props.params.id);
    return (
      <BlogItem {...(items[index])} />
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
