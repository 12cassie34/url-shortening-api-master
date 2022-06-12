import GetStartedBtn from './GetStartedBtn'

import './CallAction.css'

function CallAction() {
    return (
        <section id='call-action' className='pt-16 pb-16 bg-dark_violet text-center'>
            <div>
                <h2 className='mb-4 text-2xl font-bold text-white xl:text-4xl'>Boost your links today</h2>
                <GetStartedBtn />
            </div>  
        </section>
    )
}

export default CallAction