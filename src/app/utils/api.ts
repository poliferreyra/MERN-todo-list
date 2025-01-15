import axios from 'axios';

export const getTodos = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/todos');
    return response.data; 
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};