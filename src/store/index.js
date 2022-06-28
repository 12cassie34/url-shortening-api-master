import { configureStore } from '@reduxjs/toolkit'

import shortenedLinksSlice from './shortened-links-slice'
import loginSlice from './login-slice'

const rootStore = configureStore({
    reducer: {
        shortenedLinks: shortenedLinksSlice.reducer,
        login: loginSlice.reducer
    }
})

export default rootStore