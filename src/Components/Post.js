import React, {Component} from "react";

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount(){
    let id = this.props.match.params.post_id;
    fetch("http://jsonplaceholder.typicode.com/posts/" + id)
      .then(response => response.json())
      .then(json => this.setState({data: json}));
  }
  render(){
    const {data} = this.state;
    const post = data ? (
      <div className="post card">
        <div className="card-content">
          <span className="card-title">{data.title}</span>
          <p>{data.body}</p>
        </div>
      </div>
    ) : (
    <div className="center">
      No posts yet
    </div>);
    return post;
  }
}

export default Post;
