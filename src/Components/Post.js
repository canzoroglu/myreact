import React, {Component} from "react";
import {connect} from "react-redux";

class Post extends Component {

  render(){
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post card">
        <div className="card-content">
          <span className="card-title">{this.props.post.title}</span>
          <p>{this.props.post.body}</p>
        </div>
      </div>
    ) : (
    <div className="center">
      No posts yet
    </div>);
    return post;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
}
export default connect(mapStateToProps)(Post);
