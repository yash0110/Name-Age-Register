import { useState } from 'react';

import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList'
import ErrorModal from './Components/UI/ErrorModal';

function App() {

    const [users, setUsers] = useState([]);
    const [errorMesage, setErrorMessage] = useState('');

    const AddUserHandler = (newUser) => {
        setUsers((prevUsers) => 
            [newUser,
            ...prevUsers]
        );
    };

    const OkayHandler = () => {
        setErrorMessage('');
    }

    const InvalidInputHandler = (error) => {
        setErrorMessage(error);
    }

    return (
        <div>
            {(errorMesage!=='') && <ErrorModal title='Invalid Input' message={errorMesage} onOkay={OkayHandler}/>}
            <AddUser onAddUser={AddUserHandler} onInvalidInput={InvalidInputHandler}/>
            <UserList users={users} />
        </div>
    );
}

export default App;
