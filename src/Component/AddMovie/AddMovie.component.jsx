import React, { useState } from "react";
import Input from "../Input/Input.Component";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [nameOfTheInput, setNameOfTheInput] = useState("");
  const [TypeOfTheInput, setTypeOfTheInput] = useState("");

  const onInputChange1 = (event) => {
    title=event.target.value; 
  };
  const onInputChange2 = (event) => {
    nameOfTheInput=event.target.value; 
  };
  const onInputChange3 = (event) => {
    TypeOfTheInput=event.target.value; 
  };
  const ArrayMovie = [
    { Title: "name Movie", NameOfTheInput: "Batmen", TypeOfTheInput: "text" ,InputChange: {onInputChange1}},
    { Title: "Author Movie", NameOfTheInput: "Shlomi", TypeOfTheInput: "text",InputChange: {onInputChange2} },
    { Title: "Raitring Movie", NameOfTheInput: "7", TypeOfTheInput: "number",InputChange: {onInputChange3} },
    {
      Title: "Time Movie",
      NameOfTheInput: "two hour",
      TypeOfTheInput: "number",
    },
  ];
  return (
    <div>
      <h1>Movies :</h1>
      {ArrayMovie.map((oneInput) => (
        <Input
          TitleInput={oneInput.Title}
          TypeInput={oneInput.TypeOfTheInput}
          NameInput={oneInput.NameOfTheInput}
          InputChange={oneInput.InputChange}
        />
      ))}
      <button onClick={()=>{}}>clickk </button>
    </div>
  );
};
export default AddMovie;
