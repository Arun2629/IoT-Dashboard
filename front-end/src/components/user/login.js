import React from 'react';
import { useDispatch } from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextField, Box, Button, Typography} from '@mui/material';
import { startLoginUser } from '../../actions/usersActions';

const Login = (props) => {
    const dispatch = useDispatch()
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email format').required('Required Field'),
        password: Yup.string().max(16, 'Password should be less than 16 characters').min(8, 'Password should be greater than 8 characters').required('Reaquired field')
    })
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values, {resetForm}) => {
            const formData = {email: values.email,password: values.password}
            const redirectDashboard = () => {
                props.history.push('/dashboard')
            }
            dispatch(startLoginUser(formData, resetForm, redirectDashboard))
            
        },
        validationSchema: validationSchema
    })

    const handleClick = () => {
        props.history.push('/register')
    }

    return (
        <div >
            <form onSubmit={formik.handleSubmit}>
            <Box className='form-container'>
                <Typography variant='h3' textAlign={'center'}>Login</Typography>
                <TextField  id='email'
                            name='email'
                            label='Email'
                            type={'text'}
                            placeholder='Email'
                            margin='normal'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            />
                <TextField  id='password'
                            name='password'
                            type={'password'}
                            label='Password'
                            placeholder='Password'
                            margin='normal'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            />
                <Button variant='contained' type='submit' sx={{marginTop:'1%'}}>
                    Login
                </Button>
                <Button variant='contained' type='button' onClick={handleClick}  sx={{backgroundColor: 'green', marginTop:'1%'}} >Create New Account</Button>
            </Box>
            </form>
            
        </div>
    )
}

export default Login