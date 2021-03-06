import React, {Component} from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }
    componentWillMount () {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result => result.json())
        .then(data => this.setState({posts: data}));
    }
    render () {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h2>Title: </h2>{post.title}<br/>
                <h2>Body: </h2>{post.body}
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}
export default Posts;