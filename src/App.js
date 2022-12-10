import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList'

function App() {
    let users =[{username:'Yash', age:'22'},{username:'Ankur', age:'23'}];

    return (
        <div>
            <AddUser />
            <UserList users={users} />
        </div>
    );
}

export default App;
