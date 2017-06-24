import React from 'react';

import { items as staticItems } from 'constants/static/items';

import BlogList from 'components/widgets/blog/list';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts };
    this.incrementLikes = this.incrementLikes.bind(this);
  }

  incrementLikes(id) {
    // let copy = Object.assign({}, this.state.posts);
    let copy = _.cloneDeep(this.state.posts);

    const index = copy.findIndex(item => item.id == id)

    copy[index]["meta"]["likes"]++;

    this.setState({
      posts: copy
    })
  }

  render() {
    return(
      <div>
        <BlogList items={ this.state.posts } incrementLikes={ this.incrementLikes } />
      </div>
    )
  }
}

export default BlogPage;
