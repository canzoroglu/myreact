import React, {Component} from "react";

class AddPeople extends Component {

  handleSubmit(e){
    e.preventDefault();
    const inputs = document.querySelectorAll("input[type='text']");
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const profession = document.querySelector("#profession").value;
    const people = this.props.people;
    let person = {name, age, profession, id: people[people.length - 1].id + 1};
    this.props.onChange(person);
    inputs.forEach(input => input.value = "");
    document.querySelector("#name").focus();
  }
  render(){
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" required autoFocus /><br />
          <label htmlFor="age">Age: </label>
          <input type="text" id="age" required /><br />
          <label htmlFor="profession">Profession: </label>
          <input type="text" id="profession" required /><br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddPeople;
