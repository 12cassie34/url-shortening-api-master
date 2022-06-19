import { configureStore } from '@reduxjs/toolkit'

import shortenedLinksSlice from './shortened-links-slice'

const rootStore = configureStore({
    reducer: {
        shortenedLinks: shortenedLinksSlice.reducer,
    }
})

export default rootStore