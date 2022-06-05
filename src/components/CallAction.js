import GetStartedBtn from './GetStartedBtn'

import bgBoostMobile from '../images/bg-boost-mobile.svg'

import './CallAction.css'

function CallAction() {
    return (
        <section id='call-action' className='pt-28 pb-20 bg-dark_violet text-center'>
            <div>
                <h2 className='mb-4 text-2xl font-bold text-white'>Boost your links today</h2>
                <GetStartedBtn />
            </div>  
        </section>
    )
}

export default CallAction