import axios from 'axios';

const fetchDepartments = async () => {
  try {
    const response = await axios.get('https://geo.api.gouv.fr/departements');
    const departments = response.data;
    return departments;
  } catch (error) {
    console.error('Error fetching departments:', error);
    return [];
  }
}

export default fetchDepartments;
