import axios from 'axios';

const usersUrl = '/data';

export const getUsers = async (id) => {
    console.log(id)
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(usersUrl, user);
}

export const editUser = async (id, user) => {
    return await axios.patch(`${usersUrl}/${id}`, user)
}