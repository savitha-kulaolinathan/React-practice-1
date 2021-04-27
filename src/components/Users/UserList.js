import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList =(props) =>{
    return(
        <Card className ={classes.users}><ul>
        {props.users.map((user,i) =><li key ={i}>  {user.name} {user.age}</li>)}
    </ul></Card>
        
    )
};
export default UserList;