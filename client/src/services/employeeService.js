import axios from "axios";

const API = "http://localhost:5000/employee";

export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API}/all`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addEmployee = async (data) => {
  try {
    const response = await axios.post(`${API}/add`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};