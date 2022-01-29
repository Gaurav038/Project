import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import {useNavigate} from 'react-router-dom';

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
            marginTop: 5
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const {employee_name, employee_salary, employee_age } = user;
    const classes = useStyles();
    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/');
    }

    return (
      <FormGroup className={classes.container}>
      <Typography variant="h4">Add Employee</Typography>
      
      <FormControl>
          <InputLabel htmlFor="my-input">Employee name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='employee_name' value={employee_name} id="my-input" />
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Employee Salary</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='employee_salary' value={employee_salary} id="my-input"/>
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Employee age</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='employee_age' value={employee_age} id="my-input" />
      </FormControl>
      <FormControl>
          <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
      </FormControl>
  </FormGroup>
      
    )
}

export default AddUser;