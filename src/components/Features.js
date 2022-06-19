import ShortenInput from './ShortenInput'
import Feature from './Feature'

import brandRecognition from '../images/brand-recognition.svg'
import detailedRecords from '../images/detailed-records.svg'
import fullyCustomizable from '../images/fully-customizable.svg'

import './Feature.css'

const featureArray = [
    {
        title: 'Brand Recognition',
        content: 'Boost your brand recognition with each click. Genericc links don\'t mean a thing. Branded links help instil confidence in your content.',
        icon: brandRecognition,
        isLinked: true
    },
    {
        title: 'Detailed Records',
        content: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
        icon: detailedRecords,
        isLinked: true
    },
    {
        title: 'Fully Customizable',
        content: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
        icon: fullyCustomizable,
        isLinked: false
    }
]

function Features({ isInBigScreen }) {
    return (
        <section id='features' className='relative pb-20 bg-slate-200 xl:pb-52'>
            <ShortenInput />
            <div className='text-center bg-slate-200'>
                <h2 className='mb-5 text-2xl font-bold xl:text-4xl'>Advanced Statistics</h2>
                <p className='px-4 text-custom-gray xl:mx-auto xl:w-5/12'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='mt-20 xl:flex xl:justify-between xl:mx-20'>
                {featureArray.map(feature => {
                    const isHorizontalLink = feature.isLinked && isInBigScreen
                    return (
                        <div key={feature.title} className='featrue-card-container xl:flex'>
                            <Feature isInBigScreen={isInBigScreen} title={feature.title} content={feature.content} icon={feature.icon} isLinked={feature.isLinked} />
                            { isHorizontalLink &&
                                <div className='relative xl:flex xl:items-center'>
                                    <div className='feature-link-line w-12 h-2 bg-cyan'></div>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Features