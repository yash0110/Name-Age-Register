import Card from '../UI/Card.js'
import '../../css/UserList.css'

const UserList = (props) => {

    const displayUsers = props.users.map((user) => <li key={Math.random()}>{user.username+' ('+user.age+' years old)'}</li>);

    return (
        <Card class='users'>
            <ul>
                {displayUsers}
            </ul>
        </Card>
    );
}

export default UserList;