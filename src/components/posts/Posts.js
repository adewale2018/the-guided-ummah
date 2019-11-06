import React, { Component } from "react";
import './Posts.css';
import RecentsPosts from './../recentsposts/RecentsPosts';

class Posts extends Component {
  static defaultProps = {
    posts: [
      {
        id: '1',
        title: "First post",
        body: "This is the first post",
        author: "First post author"
      },
      {
        id: '2',
        title: "Second post",
        body: "This is the second post",
        author: "Second post author"
      }
    ]
  
  }
    
  render () {
    console.log(this.props.posts);
    return (
      <div>
        <RecentsPosts posts={this.props.posts} />
      </div>
    );

  }
};



export default Posts;