import { useState, useEffect } from 'react';
import { getUsers} from '../Service/api';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'


const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);


    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <div
            className="home-container container mt-4 animate__animated animate__fadeIn animate__slow"
            style={{marginBottom: '50px'}}
        >
            <div className="row">
                <h1 className="text-center">Employee List</h1>
            </div>
            <div className="row">
                <div className="col">
                    <table
                        className="customers-table table table-dark table-striped table-bordered border-dark mt-4"
                    >
                        <thead className="text-center fs-6">
                            <tr>
                                <th>Id No.</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Age</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody className="text-center fs-6">
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td className="fw-bold">{user._id}</td>
                                    <td>{user.employee_name}</td>
                                    <td>{user.employee_salary}</td>
                                    <td>
                                        {user.employee_age}
                                    </td>
                                    <td><Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default AllUsers;