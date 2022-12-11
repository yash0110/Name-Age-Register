import { useState } from 'react';

import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList'


function App() {

    const [users, setUsers] = useState([]);

    const AddUserHandler = (newUser) => {
        setUsers((prevUsers) => 
            [newUser,
            ...prevUsers]
        );
    };

    return (
        <div>
            <AddUser AddUser={AddUserHandler}/>
            <UserList users={users} />
        </div>
    );
}

export default App;
