import './App.css';
import {useState} from 'react';
import Users from "./Users";
import DepartmentDropdown from './departmentDropdown';

function App() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='title title2'>Menu déroulant des départements</div>
      </header>
      <main>
        {/* Utilisation du composant DepartmentDropdown */}
        <DepartmentDropdown setFilteredUsers={setFilteredUsers} />
      </main>
      <Users users={filteredUsers}/>
    </div>
  );
}

export default App;