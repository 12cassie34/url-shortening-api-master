import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        currentUser: {},
        loginEmail: "",
        loginPassword: "",
        signUpName: "",
        signUpEmail: "",
        signUpPassword: ""
    },
    reducers: {
        setCurrentUser(state, value) {
            state.currentUser = value.payload
        },
        changeLoginEmail(state, value) {
            state.loginEmail = value.payload
        },
        changeLoginPassword(state, value) {
            state.loginPassword = value.payload
        },
        changeSignUpName(state, value) {
            state.signUpName = value.payload
        },
        changeSignUpEmail(state, value) {
            state.signUpEmail = value.payload
        },
        changeSignUpPassword(state, value) {
            state.signUpPassword = value.payload
        },
    }
})

export const { changeLoginEmail, changeLoginPassword, setCurrentUser, changeSignUpName, changeSignUpEmail, changeSignUpPassword } = authSlice.actions

export default authSlice;