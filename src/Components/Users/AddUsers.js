import React, { useState } from "react";
import Card from "../Ui/Card";
import styles from './AddUsers.module.css';
import Button from './../Ui/Button';
import ErrorHandler from './../Ui/ErrorHandler';

const AddUsers = props => {
     const [name, setName] = useState("");
     const [age, setAge] = useState("");
     const [error, setError] = useState("");


     const submitHandler = event => {
          event.preventDefault();
          if (name.trim().length === 0 && age.trim().length === 0) {
               setError({
                    title: "InValid Input",
                    message: "Please Enter A Valid Name And Age"
               })
               return;
          }
          if (+age < 1) {
               setError({
                    title: 'InValid Age',
                    message: "Please Enter A Valid Age(>1)"
               })
               return;
          }
          props.onAdd(name, age);
          setName("");
          setAge("");
     }


     const userNameHandler = event => {
          setName(event.target.value);
     }

     const userAgeHandler = event => {
          setAge(event.target.value);
     }

     const errorHandler = () => {
          setError(null);
     }
     return (
          <>
               {error && <ErrorHandler title={error.title} message={error.message} errorHandler={errorHandler} />}
               <Card className={styles.input}>
                    <form action="" >
                         <label htmlFor="name">UserName</label>
                         <input type="text" id="name" onChange={userNameHandler} value={name} />
                         <label htmlFor="age">UserAge</label>
                         <input type="number" id="age" onChange={userAgeHandler} value={age} />
                         <Button onClick={submitHandler} type="button">Add User</Button>
                    </form>
               </Card>

          </>
     )
}

export default AddUsers;