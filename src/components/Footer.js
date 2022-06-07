import './Footer.css'

import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'

const footerLinks = [
    {
        title: 'Features',
        links: [
            {
                label: 'Link Shortening',
                link: '#'
            },
            {
                label: 'Branded Links',
                link: '#'
            },
            {
                label: 'Analytics',
                link: '#'
            },
        ]
    },
    {
        title: 'Resources',
        links: [
            {
                label: 'Blog',
                link: '#'
            },
            {
                label: 'Developers',
                link: '#'
            },
            {
                label: 'Support',
                link: '#'
            },
        ]
    },
    {
        title: 'Company',
        links: [
            {
                label: 'About',
                link: '#'
            },
            {
                label: 'Our Team',
                link: '#'
            },
            {
                label: 'Careers',
                link: '#'
            },
            {
                label: 'Contact',
                link: '#'
            },
        ]
    },
]

const socialMediaLink = [
    {
        icon: facebook,
        link: '#'
    },
    {
        icon: twitter,
        link: '#'
    },
    {
        icon: pinterest,
        link: '#'
    },
    {
        icon: instagram,
        link: '#'
    }
]

function Footer() {
    return (
        <footer className='pb-16 bg-very-dark-violet text-white text-center'>
            <div className='flex justify-center py-16'>
                <img src={logo} className='footer--logo' />
            </div>
            <div>
                { footerLinks.map(group => {
                    return (
                        <div className='pb-10'>
                            <h5 className='mb-4'>{ group.title }</h5>
                            <ul className='text-custom-gray'>
                                { group.links.map(link => {
                                    return (
                                        <li className='mb-2'>
                                            <a href={link.link}>{link.label}</a>
                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        
                    )
                }) }
            </div>
            <div className='flex justify-between items-center mx-auto w-48'>
                { socialMediaLink.map(link => {
                    return (
                        <a href={link.link}>
                            <img src={link.icon} />
                        </a>
                    )
                }) }
            </div>
        </footer>
    )
}

export default Footer