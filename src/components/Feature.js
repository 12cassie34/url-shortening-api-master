import './Feature.css'

function Feature({ title, content, icon, isLinked }) {
    return (
        <div>
            <div className='relative mt-8 mx-auto pb-8 w-10/12 rounded bg-white'>
                <div className='feature-icon-container absolute w-full'>
                    <div className='flex justify-center items-center mx-auto w-20 h-20 rounded-full bg-dark_violet'>
                        <img className='w-10' src={icon} />
                    </div>
                </div>
                <div className='pt-20 text-center'>
                    <h3 className='mb-4 text-xl font-bold'>{title}</h3>
                    <p className='px-4 text-custom-gray'>{content}</p>
                </div>
            </div>
            { isLinked &&
                <div className='relative mx-auto w-10/12'>
                    <div className='feature-link-line mx-auto w-2 h-12 bg-cyan'></div>
                </div>
            }
        </div>

    )
}

export default Feature