import React from "react";

function PeopleList(props) {
  const peopleList = props.people.map(person => {
    const {name, age, profession, id} = person;
    return (
      <ul key={id}>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Profession: {profession}</li>
        <button onClick={() => props.onDelete(id)}>Delete</button>
      </ul>
    );
  })
  return (
    <div>
      <p>People List</p>
      {peopleList}
    </div>
  );
}

export default PeopleList;
