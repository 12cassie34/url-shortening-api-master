import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import bgShortenMobile from '../images/bg-shorten-mobile.svg'

import './ShortenInput.css'

import ShortenedLink from './ShortenedLink'

import { addShortenedLinks } from '../store/shorten-link-action'

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

function ShortenInput() {
    const [urlToShorten, setUrlToShorten] = useState('')
    const [isUrlValid, setisUrlValid] = useState(true)
    // const [shortenedLinks, setShortenedLinks] = useState([])
    const shortenedLinks = useSelector((state) => state.shortenedLinks.shortenedLinks)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(shortenedLinks)
    }, [shortenedLinks])
    
    
    const outlineClass = !isUrlValid ? 'focus:outline-red' : ''

    const handleUrlInput = (e) => {
        setUrlToShorten(e.target.value)
    }

    const checkIfValid = () => {
        setisUrlValid(urlRegex.test(urlToShorten))
    }


    const submitUrl = () => {
        if (!isUrlValid) return
        dispatch(addShortenedLinks(urlToShorten))
    }

    return (
        <section id='shorten-input' className='flex flex-col items-center relative z-10 mx-auto w-10/12 h-48 bg-dark_violet rounded-lg
                                               xl:flex-row'>
            <img className='shorten-bg-img absolute right-0 top-0' src={bgShortenMobile} />
            <div className='flex flex-col mx-auto py-8 w-10/12 xl:flex-row'>
                <input onChange={(e) => {handleUrlInput(e)}} onBlur={checkIfValid}
                       className={`h-14 rounded-lg indent-4 focus:outline-2 focus:outline-cyan xl:w-10/12 ${outlineClass}`}
                       type='url' placeholder='Shorten a linke here...' />
                { !isUrlValid ? <p className='text-red text-sm'>Please add a valid link.</p> : null }
                <button onClick={submitUrl} className='mt-3 h-14 bg-cyan text-white rounded-lg
                                   xl:mt-0 xl:ml-6 xl:w-2/12'>Shorten It! </button>
            </div>
            { shortenedLinks.length 
                ? <div className='flex flex-col py-8 xl:flex-row'>
                    { shortenedLinks.map(link => { return <ShortenedLink key={link.shortenedUrl} originUrl={link.originUrl} shortenedUrl={link.shortenedUrl} /> }) }
                </div>
                : null
            }
        </section>
    )
}

export default ShortenInput