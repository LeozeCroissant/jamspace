import './App.css';
import {useState} from 'react';
import {data} from './data';
import Users from "./Users";
import DepartmentDropdown from './departmentDropdown';

function App() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered list of users

  const handleDepartmentChange = (departmentCode) => {
    //console.log('handleDepartmentChange called with departmentCode:', departmentCode);
    setSelectedDepartment(departmentCode);


    const usersInDepartment = data.filter(user =>
      user.departments.toString().includes(selectedDepartment)
    );
    setFilteredUsers(usersInDepartment);

    console.log(filteredUsers);


  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log('maVariable a changé :', users);
  }, [users]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Menu déroulant des départements</h1>
      </header>
      <main>
        {/* Utilisation du composant DepartmentDropdown */}
        <DepartmentDropdown onChange={handleDepartmentChange} />
      </main>
      <Users users={filteredUsers}/>
    </div>
  );
}

export default App;
