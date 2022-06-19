import { createSlice } from '@reduxjs/toolkit'

const shortenedLinksSlice = createSlice({
    name: 'shortenedLinksSlice',
    initialState: {
        shortenedLinks: []
    },
    reducers: {
        addNewShortendLinks(state, newLinkToAdd) {
            state.shortenedLinks.push(newLinkToAdd)
        },
    }
})

export const { addNewShortendLinks } = shortenedLinksSlice.actions

export default shortenedLinksSlice