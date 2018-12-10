import React, {Component} from "react";

class AddPeople extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      age : "",
      profession: "",
      id: 3
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value,
      id: this.state.id + 1
    });
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onChange(this.state);
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange} /><br />
          <label htmlFor="age">Age: </label>
          <input type="text" id="age" onChange={this.handleChange} /><br />
          <label htmlFor="profession">Profession: </label>
          <input type="text" id="profession" onChange={this.handleChange} /><br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddPeople;
