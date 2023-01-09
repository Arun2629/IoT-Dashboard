import axios from 'axios'
import swal from 'sweetalert'

export const startRegisterUser = (formData, resetForm, redirect) => {

    return async (dispatch) => {
        try{
            const response = await axios.post('http://localhost:3055/users/register', formData)
            const data = response.data
            if(data.hasOwnProperty('errors')){
                swal(data.errors)
            }else{
                swal("Successfully Registered")
                resetForm()
                redirect()

            }
           
        }catch(e){
            alert(e.message)
        }
    }
}

export const startLoginUser = (formData, resetForm, redirectDashboard) => {

    return async (dispatch) => {
        try{
            const response = await axios.post('http://localhost:3055/users/login', formData)
            const data = response.data
            if(data.hasOwnProperty('errors')){
                swal(data.errors)
            }else{
                localStorage.setItem('token', data.token)
                dispatch(setUser(data.user))
                resetForm()
                redirectDashboard()

            }
           
        }catch(e) {
            alert(e.message)
        }
    }
}

export const startGetUser = () => {

    return async (dispatch) => {
        try{
            const response = await axios.get('http://localhost:3033/users/data', {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            })
            const data = response.data
            dispatch(setUser(data))
        }catch(e){
            alert(e.message)
        }
    }
}

export const setUser = (data) => {
    return {
        type: "SET_USER",
        payload: data
    }
}
