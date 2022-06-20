import { useEffect, useState } from "react"

function ShortenedLink({ originUrl, shortenedUrl }) {
    const [isCopied, setIsCopied] = useState(false)
    const copyTheLink = () => {
        navigator.clipboard.writeText(shortenedUrl)
        setIsCopied(true)
    }
    const buttonStyle = isCopied ? 'bg-dark_violet' : 'bg-cyan'
    const buttonText = isCopied ? 'Copied!' : 'Copy'
    
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (isCopied) setIsCopied(false)
        }, 5000)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [isCopied])

    return (
        <div className='mx-auto mt-8 py-4 rounded-md bg-white'>
            <div className="px-4 break-words">{originUrl}</div>
            <div className="my-3 w-full h-px bg-custom-gray"></div>
            <div className="px-4 break-words text-cyan">{shortenedUrl}</div>
            <div className="px-4">
                <button onClick={copyTheLink} className={`mt-3 w-full h-14 ${buttonStyle} text-white rounded-lg xl:mt-0 xl:ml-6 xl:w-2/12`}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default ShortenedLink