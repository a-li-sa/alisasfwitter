import {useEffect, useState} from "react";
import axios from "axios";

export const useUserList = () => {
  const [ user, setUser ] = useState([]);
  const [newUser, setNewUser] = useState('');

  const handleNewUser = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    axios.post('/api/users', { username: e.target.value})
  }

  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        setUser(res.data);
      })
      .catch(e => console.log(e))
  }, [])


  return {
    user,
    handleNewUser
  }
}
