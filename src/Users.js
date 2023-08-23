import './App.css';
import { useEffect } from 'react';
//import {data} from './data';

const Users = ({ users }) => {
  useEffect(() => {
    // Update the document title using the browser API
    console.log('maVariable a changé :', users);
  }, [users]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </ul>
    </div>
  );
};

  export default Users;