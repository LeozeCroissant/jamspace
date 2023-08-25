import React, { useState, useEffect } from 'react';
import fetchDepartments from './fetchDepartments';
import { data } from './data';

const DepartmentDropdown = ({ setFilteredUsers }) => {
  const [departments, setDepartments] = useState([]);
  const [availableDepartments, setAvailableDepartments] = useState([]);

  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoadingVariable, setIsLoadingVariable] = useState(true);

  useEffect(() => {
    // Imports data from API
    async function fetchData() {
      try {
        const fetchedDepartments = await fetchDepartments();
        setDepartments(fetchedDepartments);
        setIsLoadingData(false);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    }
    fetchData();
  }, []);
  
  useEffect(() => {
    // Filters department codes from user list
    if (!isLoadingData && isLoadingVariable) {
      const userDepartments = [];
      data.forEach(user => {
        user.departments.forEach(code => {
          if (!userDepartments.includes(code)) {
            userDepartments.push(code);
          }
        });
      });
      // Creates a table containing user departments with code and name
      departments.forEach(department => {
        if(userDepartments.includes(parseInt(department.code))) {
          setAvailableDepartments(prevDepartments => [
            ...prevDepartments,
            { 'code': department.code, 'nom': department.nom }
          ]);
        }
      })
      
      setIsLoadingVariable(false);
      setFilteredUsers(data);
    }
  }, [availableDepartments, departments, isLoadingData, isLoadingVariable, setIsLoadingVariable, setFilteredUsers]);


  //Resets user list with each department change
  const handleDepartmentChange = (event) => {
    const selectedDepartment = event.target.value;
    const usersInDepartment = data.filter(user =>
      user.departments.toString().includes(selectedDepartment)
    );

    setFilteredUsers(usersInDepartment);
  };

  return (
    <div>
      {isLoadingVariable ? (
        <h1>LOADING ...</h1>
      ) 
      : 
      (
        <div>
        <select className='dropdown' onChange={handleDepartmentChange}>
          <option value="">Sélectionnez un département</option>
          {availableDepartments.map((department, key) => (
            <option key={key} value={department.code}>
              {department.nom + ' (' + department.code + ')'}
            </option>
          ))}
        </select>
      </div>
      )
      }
  </div>
    
  );
};

export default DepartmentDropdown;