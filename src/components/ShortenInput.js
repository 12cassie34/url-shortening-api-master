import bgShortenMobile from '../images/bg-shorten-mobile.svg'

import './ShortenInput.css'

function ShortenInput() {
    return (
        <section id='shorten-input' className='flex items-center relative z-10 mx-auto w-10/12 h-40 bg-dark_violet rounded-lg'>
            <img className='shorten-bg-img absolute right-0 top-0' src={bgShortenMobile} />
            <div className='flex flex-col mx-auto py-4 w-10/12'>
                <input className='h-14 rounded-lg indent-4 focus:outline-2 focus:outline-cyan' type='text' placeholder='Shorten a linke here...' />
                <button className='mt-3 h-14 bg-cyan text-white rounded-lg'>Shorten It!</button>
            </div>
        </section>
    )
}

export default ShortenInput