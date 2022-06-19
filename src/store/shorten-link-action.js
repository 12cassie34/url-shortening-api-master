import { addNewShortendLinks } from './shortened-links-slice'

export const addShortenedLinks = (newShortenedLink) => {
    return async (dispatch) => {
        const handleFetch = async() => {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${newShortenedLink}`)
            const data = res.json()
            return data
        }
        try {
           const linkData = await handleFetch()
           const newLinks = {
               id: linkData.result.code,
               origin_url: linkData.result.original_link,
               shortened_url: linkData.result.full_short_link
            }
           dispatch(addNewShortendLinks(newLinks))
        } catch (error) {
            console.log(error)
        }
    } 
}