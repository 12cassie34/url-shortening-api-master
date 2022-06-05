import GetStartedBtn from './GetStartedBtn'

import banner from '../images/banner.svg'

import './Welcome.css'

function Welcome() {

    return (
        <section id='welcome' className='mb-40'>
            <div className='overflow-x-hidden'>
                <img src={banner} className='welcome__banner' />
            </div>
            <div className='mt-8 text-center'>
                <h1 className='text-4xl font-bold'>More than just shorter links</h1>
                <p className='mt-4 text-lg text-custom-gray'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <div className='mt-8'>
                    <GetStartedBtn />
                </div>
            </div>
        </section>
    )
}

export default Welcome