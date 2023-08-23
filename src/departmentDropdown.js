import React, { useState, useEffect } from 'react';
import fetchDepartments from './fetchDepartments';
import { data } from './data';

const DepartmentDropdown = ({ onChange }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedDepartments = await fetchDepartments();
      setDepartments(fetchedDepartments);
    }
    fetchData();
  }, []);

    const userDepartments = [];
    data.forEach(user => {
        user.departments.forEach(department => {
        if (!userDepartments.includes(department)) {
            userDepartments.push(department);
        }
        });
    });

    //console.log('userDepartments:', userDepartments);

    const availableDepartments = [];
    departments.forEach(department => {
        userDepartments.forEach(code => {
            //console.log(department.code, code)
            if (department.code.toString()===code.toString()) {
            if (!availableDepartments.includes(department.nom)) {
                availableDepartments.push({'code': department.code, 'nom': department.nom});
            }}
        })
    })

    //console.log('availableDepartments:', availableDepartments);

    const handleSelectChange = (event) => {
    const selectedDepartment = event.target.value;
    onChange(selectedDepartment);
    };


  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="">Sélectionnez un département</option>
        {availableDepartments.map((department) => (
          <option key={department.code} value={department.code}>
            {department.nom}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentDropdown;
