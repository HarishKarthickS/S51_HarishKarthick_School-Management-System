import axios from 'axios';
import {
    authRequest,
    stuffAdded,
    authSuccess,
    authFailed,
    authError,
    authLogout,
    doneSuccess,
    getDeleteSuccess,
    getRequest,
    getFailed,
    getError,
} from './userSlice';

const BASE_URL = 'https://s51-harishkarthick-school-management.onrender.com';

export const loginUser = (fields, role) => async (dispatch) => {
    console.log(BASE_URL)
    dispatch(authRequest());
    try {
        const response = await axios.post(`${BASE_URL}/${role}Login`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.data.role) {
            dispatch(authSuccess(response.data));
        } else {
            dispatch(authFailed(response.data.message || "Login failed"));
        }
    } catch (error) {
        dispatch(authError(error.message || "An error occurred during login"));
    }
};
export const registerUser = (fields, role) => async (dispatch) => {
    dispatch(authRequest());

    try {
        const response = await axios.post(`${BASE_URL}/${role}Reg`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.data.schoolName) {
            dispatch(authSuccess(response.data));
        } else if (response.data.school) {
            dispatch(stuffAdded());
        } else {
            dispatch(authFailed(response.data.message || "Registration failed"));
        }
    } catch (error) {
        dispatch(authError(error.message || "An error occurred during registration"));
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch(authLogout());
};

export const getUserDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const response = await axios.get(`${BASE_URL}/${address}/${id}`);

        if (response.data) {
            dispatch(doneSuccess(response.data));
        } else {
            dispatch(getFailed("User details not found"));
        }
    } catch (error) {
        dispatch(getError(error.message || "An error occurred while fetching user details"));
    }
};

export const deleteUser = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    // This function is disabled. If you want to enable it in the future, uncomment the below code.
    dispatch(getFailed("Sorry, the delete function has been disabled for now."));
    
    // try {
    //     const response = await axios.delete(`${BASE_URL}/${address}/${id}`);
    //     if (response.data.message) {
    //         dispatch(getFailed(response.data.message));
    //     } else {
    //         dispatch(getDeleteSuccess());
    //     }
    // } catch (error) {
    //     dispatch(getError(error.message || "An error occurred while deleting user"));
    // }
};

export const updateUser = (fields, id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const response = await axios.put(`${BASE_URL}/${address}/${id}`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.data.schoolName) {
            dispatch(authSuccess(response.data));
        } else {
            dispatch(doneSuccess(response.data));
        }
    } catch (error) {
        dispatch(getError(error.message || "An error occurred while updating user details"));
    }
};

export const addStuff = (fields, address) => async (dispatch) => {
    dispatch(authRequest());

    try {
        const response = await axios.post(`${BASE_URL}/${address}Create`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.data.message) {
            dispatch(authFailed(response.data.message));
        } else {
            dispatch(stuffAdded(response.data));
        }
    } catch (error) {
        dispatch(authError(error.message || "An error occurred while adding data"));
    }
};
