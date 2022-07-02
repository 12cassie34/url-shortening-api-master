import { configureStore } from '@reduxjs/toolkit'

import shortenedLinksSlice from './shortened-links-slice'
import authSlice from './auth-slice'

const rootStore = configureStore({
    reducer: {
        shortenedLinks: shortenedLinksSlice.reducer,
        auth: authSlice.reducer
    }
})

export default rootStore