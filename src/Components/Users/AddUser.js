import { useState } from 'react'
import Card from '../UI/Card'
import '../../css/AddUser.css'
import '../../css/Button.css'

const emptyInputError = 'Please enter a valid name and age (non-empty values).';
const invalidAgeError = 'Please enter a valid age (>0)';

const AddUser = (props) =>{

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(!username || !age){
            props.onInvalidInput(emptyInputError);
            return;
        }
        if (isNaN(+age) || +age<1){
            console.log(age);
            props.onInvalidInput(invalidAgeError);
            return;
        }

        props.onAddUser({username: username,
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