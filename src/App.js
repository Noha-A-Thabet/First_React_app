import React, { useState } from 'react';
import './App.css';
import AddUsers from './Components/Users/AddUsers';
import UsersList from './Components/Users/UsersList';

function App() {
  const [Users, setUser] = useState([]);

  const addUserHandler = (usName, usAge) => {
    setUser((prevUserList) => {
      return [
        ...prevUserList, { name: usName, age: usAge }
      ]
    })
  }
  return (
    <>
      <AddUsers onAdd={addUserHandler} />
      <UsersList users={Users} />
    </>
  );
}

export default App;
