import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',// 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: ()=>{
            state.uid+1
        },
        logout: (state,payload) =>{
            state.uid+1
        },
        checkingCredentials: (state) => {
            state.uid+1
        }
    }
});
export const { login, logout, checkingCredentials } = authSlice.actions;
