import Card from '../UI/Card'
import '../../css/AddUser.css'
import '../../css/Button.css'

const AddUser = () =>{
    return (
        <Card>
            <form className='input'>
                <label>Username</label>
                <input type="text"/>
                <label>Age (Years)</label>
                <input type="text"/> 
                <button type="submit" className='button'>Add User</button>
            </form>
        </Card>  
    );
}

export default AddUser;