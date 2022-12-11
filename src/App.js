import { useState } from 'react';

import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList'

const DUMMY_USERS = [
    {username: 'Yash',
    age: 22},
    {username: 'Ankur',
    age: 23}
]

function App() {

    const [users, setUsers] = useState(DUMMY_USERS);

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
