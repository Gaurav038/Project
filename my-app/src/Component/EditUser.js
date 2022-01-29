import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useNavigate , useParams} from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    employee_name: '',
    employee_salary: '',
    employee_age: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { employee_name, employee_salary, employee_age } = user;
    const { id } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Update Information</Typography>
            
            <FormControl>
                <InputLabel htmlFor="my-input">Employee name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='employee_name' value={employee_name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Employee Salary</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='employee_salary' value={employee_salary} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Employee age</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='employee_age' value={employee_age} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;