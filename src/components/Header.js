
import { useState } from 'react'

import logo from '../images/logo.svg'

function Header() {
    const mainLinks = [
        {
            label: 'Features',
            link: '#'
        },
        {
            label: 'Pricing',
            link: '#'
        },
        {
            label: 'Resources',
            link: '#'
        },
    ]

    const authLinks = [
        {
            label: 'Login',
            link: '#'
        },
        {
            label: 'Sing Up',
            link: '#'
        },
    ]

    const [isShowNav, setIsShowNav] = useState(false)
    const closeNav = () => { setIsShowNav(false) }

    const toggleMenu = (e) => {
        e.stopPropagation()
        setIsShowNav(isShowNav => !isShowNav)
    }

    return (
        <div>
            <div className='flex justify-between p-4'>
                <div>
                    <img src={logo} />
                </div>
                <div onClick={(e) => { toggleMenu(e) }} className='flex justify-center flex-col cursor-pointer'>
                    <div className='w-6 h-1 bg-custom-gray'></div>
                    <div className='my-1 w-6 h-1 bg-custom-gray'></div>
                    <div className='w-6 h-1 bg-custom-gray'></div>
                </div>
            </div>
            {isShowNav &&
                <div onClick={closeNav} className='w-screen h-screen'>
                    <div className='mx-4 pt-8 pb-4 text-white text-lg text-center font-bold bg-dark_violet rounded-lg'>
                        <ul>
                            {mainLinks.map(link => {
                                return <li className='mb-4 mx-auto py-2 w-10/12 rounded-3xl hover:bg-cyan focus:bg-cyan'>{link.label}</li>
                            })}
                        </ul>
                        <div className='mx-auto my-6 w-72 h-px bg-gray-400 opacity-50'></div>
                        <ul>
                            {authLinks.map(link => {
                                return <li className='mb-4 mx-auto py-2 w-10/12 rounded-3xl hover:bg-cyan focus:bg-cyan'>{link.label}</li>
                            })}
                        </ul>
                    </div>
                </div>

            }

        </div>

    )
}

export default Header