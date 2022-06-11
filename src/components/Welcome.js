import GetStartedBtn from './GetStartedBtn'

import banner from '../images/banner.svg'

import './Welcome.css'

function Welcome() {

    return (
        <section id='welcome' className='mb-40 xl:flex xl:flex-row-reverse xl:ml-24'>
            <div className='overflow-x-hidden'>
                <img src={banner} className='welcome__banner mx-auto' />
            </div>
            <div className='mt-8 text-center 
                            xl:text-left xl:flex xl:flex-col xl:justify-center'>
                <h1 className='text-4xl font-bold
                               xl:text-6xl xl:leading-tight'>More than just shorter links</h1>
                <p className='mt-4 text-lg text-custom-gray
                              xl:mt-0 xl:w-8/12'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <div className='mt-8'>
                    <GetStartedBtn />
                </div>
            </div>
        </section>
    )
}

export default Welcome