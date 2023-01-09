import React from 'react';
import { useDispatch } from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextField, Box, Button, Typography} from '@mui/material';
import { startRegisterUser } from '../../actions/usersActions';

const Register = (props) => {
    const dispatch = useDispatch()
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid Email format').required('Required Field'),
        password: Yup.string().max(16, 'Password should be less than 16 characters').min(8, 'Password should be greater than 8 characters').required('Reaquired field')
    })
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: (values, {resetForm}) => {
            const formData = {username: values.username,email: values.email,password: values.password}
            const redirect = () => {
                props.history.push('/')
            }
            dispatch(startRegisterUser(formData, resetForm, redirect))
            
        },
        validationSchema: validationSchema
    })

    return (
        <div >
            <form onSubmit={formik.handleSubmit}>
            <Box className='form-container'>
                <Typography variant='h3' textAlign={'center'}>Register</Typography>
                <TextField  id='username'
                            name='username'
                            label='Username'
                            type={'text'}
                            placeholder='Username'
                            margin='normal'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                            />
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
                    Register
                </Button>
            </Box>
            </form>
            
        </div>
    )
}

export default Register