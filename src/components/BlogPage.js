import React from 'react';

import BlogList from 'components/widgets/blog/BlogList';

import _ from 'lodash';

const { PropTypes }  = React;

// import { items } from 'constants/static/items';

import request from 'superagent';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { posts: items };
    this.state = { posts: [] };
    this.incrementLikes = _.bind(this.incrementLikes, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  incrementLikes(id) {
    // let copy = Object.assign({}, this.state.posts);
    const copy = _.cloneDeep(this.state.posts);

    const index = copy.findIndex(item => item.id == id);

    copy[index]['meta']['likes']++;

    this.setState({
      posts: copy
    });
  }

  render() {
    return (
      <div>
        <BlogList
          items={ this.state.posts }
          incrementLikes={ this.incrementLikes }
        />
      </div>
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.array,
  incrementLikes: PropTypes.func,
};

export default BlogPage;
