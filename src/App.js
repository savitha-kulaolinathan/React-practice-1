import React, { useState} from 'react';

import AddUser from "./components/Users/AddUser"
import UserList from "./components/Users/UserList"


function App() {
  const [userList, setUserlist] = useState([])
  const addUserhandler =(uName, uAge) =>{
    setUserlist(prev =>{
      return[...prev, {name:uName, age:uAge}];
    });
  }
  return (
    <div>
<AddUser onAddUser ={addUserhandler} />
<UserList  users ={userList}/>
    </div>
   
  );
}

export default App;
