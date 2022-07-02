import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        loginEmail: "",
        loginPassword: ""
    },
    reducers: {
        changeLoginEmail(state, value) {
            state.loginEmail = value.payload
        },
        changeLoginPassword(state, value) {
            state.loginPassword = value.payload
        }
    }
})

export const { changeLoginEmail, changeLoginPassword } = authSlice.actions

export default authSlice;