import React, {Component} from "react";
import {Link} from "react-router-dom";
import Pokemon from "../assets/images/pokeball.png";

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({posts: json.slice(0, 10)}));
  }
  render(){
    const {posts} = this.state;
    const postList = posts.length ? (posts.map(post => {
      return (
        <div className="post card" key={post.id}>
          <img src={Pokemon} alt="A pokeball" />
          <div className="card-content">
            <Link to={"/posts/" + post.id}><span className="card-title red-text">{post.title}</span></Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })) : (
    <div className="center">
      No posts yet
    </div>);
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
