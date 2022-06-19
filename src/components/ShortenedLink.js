function ShortenedLink({ originUrl, shortenedUrl }) {
    return (
        <div className='mx-auto mt-8 py-4 rounded-md bg-white'>
            <div className="px-4 break-words">{originUrl}</div>
            <div className="my-3 w-full h-px bg-custom-gray"></div>
            <div className="px-4 break-words">{shortenedUrl}</div>
            <button className="mt-3 h-14 bg-cyan text-white rounded-lg xl:mt-0 xl:ml-6 xl:w-2/12">Copy</button>
        </div>
    )
}

export default ShortenedLink