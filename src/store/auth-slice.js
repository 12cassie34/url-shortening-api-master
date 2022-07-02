import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        currentUser: {},
        loginEmail: "",
        loginPassword: ""
    },
    reducers: {
        setCurrentUser(state, value) {
            state.currentUser = value
        },
        changeLoginEmail(state, value) {
            state.loginEmail = value.payload
        },
        changeLoginPassword(state, value) {
            state.loginPassword = value.payload
        }
    }
})

export const { changeLoginEmail, changeLoginPassword, setCurrentUser } = authSlice.actions

export default authSlice;