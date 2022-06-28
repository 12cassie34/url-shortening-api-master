import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        email: "",
        password: ""
    },
    reducers: {
        changeEmail(state, value) {
            state.email = value.payload
        },
        changePassword(state, value) {
            state.password = value.payload
        }
    }
})

export const { changeEmail, changePassword } = loginSlice.actions

export default loginSlice;