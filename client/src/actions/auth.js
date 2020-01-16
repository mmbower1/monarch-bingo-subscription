import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import setAuthToken from '../utils/setAuthToken';

// load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })

    } catch (err) {
      console.log("ERROR: " + err);
      dispatch({
        type: AUTH_ERROR
      })
    }
  }

// register
export const register = ({ name, email, btcAddress, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, btcAddress, password })
    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        alert('Register failed')
        dispatch({
            type: REGISTER_FAIL,
        })
    }
}

// login
export const login = (email, password) => async dispatch => {
    const body = JSON.stringify({ email, password });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/auth', body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
    //   dispatch(setAlert('Login success', 'success'));
  
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
          alert('Error - login action')
        // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
      dispatch({
        type: LOGIN_FAIL
      })
    }
  }