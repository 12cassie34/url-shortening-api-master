import ShortenInput from './ShortenInput'
import Feature from './Feature'

import brandRecognition from '../images/brand-recognition.svg'
import detailedRecords from '../images/detailed-records.svg'
import fullyCustomizable from '../images/fully-customizable.svg'

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

function Features() {
    return (
        <section id='features' className='relative pb-20 bg-slate-200'>
            <ShortenInput />
            <div className='text-center bg-slate-200'>
                <h2 className='mb-5 text-2xl font-bold'>Advanced Statistics</h2>
                <p className='px-4 text-custom-gray'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='mt-20'>
                { featureArray.map(feature => {
                    return <Feature key={feature.title} title={feature.title} content={feature.content} icon={feature.icon} isLinked={feature.isLinked} />
                }) }
            </div>
        </section>
    )
}

export default Features