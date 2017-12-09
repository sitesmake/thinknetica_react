import React from 'react';

import Post from 'components/widgets/blog/Post';

const { PropTypes }  = React;

import request from 'superagent';

class BlogShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: '' };
  }

  componentDidMount() {
    this.fetchPost(this.props.params.id);
  }

  fetchPost(id) {
    request.get(
      `http://localhost:3001/posts/${id}`,
      {},
      (err, res) => {
        this.setState({ post: res.body });
      }
    );
  }

  render() {
    return (
      <Post post={ this.state.post } />
    );
  }
}

BlogShow.propTypes = {
  post: PropTypes.object,
  params: PropTypes.object
};

export default BlogShow;
