import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, SetAge] = useState("");
  const  [ error, setError] = useState('');
  const userHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
     setError({
       title:"Invalid input",
       message:"Please enter a valid name and age (Non-empty values.)"
     })
      return;
    }
    if (+age < 1) {
      setError({
        title:"Invalid age",
        message: "Please enter a valid age."
      })
      return;
    }
    props.onAddUser(userName, age);
    console.log(userName, age);
    setUserName("");
    SetAge("");
  };
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    SetAge(event.target.value);
  };
  const errorHandler =() =>{
    setError(null);
  }
  return (
    <div>
     {error && <ErrorModal title={error.title} message={error.message}
     onConfirm ={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={userHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
