import { useState } from 'react'
import Card from '../UI/Card'
import '../../css/AddUser.css'
import '../../css/Button.css'

const AddUser = (props) =>{
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.AddUser({username: username,
                        age: age});
        setUsername('');
        setAge('');
    }

    const onNameChange = (event) =>{
        setUsername(event.target.value);
    }

    const onAgeChange = (event) =>{
        setAge(event.target.value);
    }

    return (
        <Card>
            <form className='input' onSubmit={onSubmitHandler}>
                <label>Username</label>
                <input type="text" onChange={onNameChange} value={username} />
                <label>Age (Years)</label>
                <input type="text" onChange={onAgeChange} value={age} /> 
                <button type="submit" className='button'>Add User</button>
            </form>
        </Card>  
    );
}

export default AddUser;