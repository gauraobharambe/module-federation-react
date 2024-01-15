import { useEffect, useState } from 'react';
import List from 'remoteList/List';
export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/users?select=id,firstName,maidenName,lastName,age,gender')
        .then(async (res) =>{
            const {users} = await res.json();
            setUsers(users);
        })
        .catch((err)=>{
            console.table(err);
        });
    },[]);

    return (
            <List data={users} message="User List" />
    );
}