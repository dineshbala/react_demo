import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
    render () {
        const postItems = this.props.posts.map(post => (
            <div key={post.id} className="react-app__posts--each-post">
                <span>Title: </span>{post.title}<br/>
                <span>Body: </span>{post.body}
            </div>
        ));
        return (
            <div>
                <h1 className="react-app__posts--header">Posts</h1>
                <div className="react-app__posts">
                    {postItems}
                </div>
            </div>
        )
    }
}

const mapStateToPosts = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

export default connect(mapStateToPosts, { fetchPosts })(Posts);