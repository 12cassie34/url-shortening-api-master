import GetStartedBtn from './GetStartedBtn'

import banner from '../images/banner.svg'

import './Welcome.css'

function Welcome() {

    return (
        <section id='welcome' className='mb-40 lg:flex lg:flex-row-reverse lg:ml-24'>
            <div className='overflow-x-hidden'>
                <img src={banner} className='welcome__banner mx-auto' />
            </div>
            <div className='mt-8 text-center 
                            lg:text-left lg:flex lg:flex-col lg:justify-center'>
                <h1 className='text-4xl font-bold
                               lg:text-6xl lg:leading-tight'>More than just shorter links</h1>
                <p className='mt-4 text-lg text-custom-gray
                              lg:mt-0 lg:w-8/12'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <div className='mt-8'>
                    <GetStartedBtn />
                </div>
            </div>
        </section>
    )
}

export default Welcome