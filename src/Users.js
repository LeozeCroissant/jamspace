import './App.css';

const Users = ({ users }) => {
  return (
    <div className='user-container'>
      <div className='title'>Liste d'utilisateurs</div>
      
      <div className='user-list'>
        {users.map(user => (
          <div className='user' key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Users;