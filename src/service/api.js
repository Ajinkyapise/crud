import axios from "axios";

const API_URL='http://localhost:3002/users';

export const addUserapi  = async (data) => {
    try {
        return await axios.post(API_URL, data);
    }
     catch (error) {
        console.log('Error while calling API',error.message);
    }
} 

export const getUsers  = async () => {
    try {
        return await axios.get(API_URL);
    }
     catch (error) {
        console.log('Error while getting users API',error.message);
    }}

export const getUser = async (data) => {
    try {
        return await axios.get(`${API_URL}/${data}`);
    }
    catch (error) {
        console.log('Error while getting user API',error.message);
    }

} 

export const editUser = async (data, id) =>{
try {
    return await axios.put(`${API_URL}/${id}`,data)
} catch (error) {
    console.log('Error while calling user API',error.message);
}
}

export const delUser = async ( id) =>{
    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log('Error while deleting user API',error.message);
    }
    }