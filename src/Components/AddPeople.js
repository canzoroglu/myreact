import React from "react";

function AddPeople(props) {

  function handleSubmit(e){
    e.preventDefault();
    const inputs = document.querySelectorAll("input[type='text']");
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const profession = document.querySelector("#profession").value;
    const people = props.people;
    let person = {name, age, profession, id: people[people.length - 1].id + 1};
    props.onChange(person);
    inputs.forEach(input => input.value = "");
    document.querySelector("#name").focus();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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

export default AddPeople;
