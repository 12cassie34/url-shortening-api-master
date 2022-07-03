
import { useMemo, useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'

import { auth } from '../firebase-config'

import logo from '../images/logo.svg'

import './Header.css'

function Header({ isInBigScreen }) {
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
            link: '/login'
        },
        {
            label: 'Sign Up',
            link: '/signup'
        },
    ]

    const [isShowNav, setIsShowNav] = useState(false)
    const closeNav = () => { setIsShowNav(false) }

    const toggleMenu = (e) => {
        e.stopPropagation()
        setIsShowNav(isShowNav => !isShowNav)
    }

    const currentUser = useSelector(state => state.auth.currentUser)
    const isLogIn = useMemo(() => {
        return Object.keys(currentUser).length ? true : false
    }, [currentUser])

    const handleSignOut = async () => {
        await signOut(auth)
    }

    return (
        <div className='relative z-10 xl:mx-20'>
            <div className='flex justify-between p-4'>
                <div className='flex'>
                    <div className='mr-12'>
                        <img src={logo} />
                    </div>
                    {isInBigScreen
                        && <div className='flex justify-between text-custom-gray'>
                            {mainLinks.map(link => {
                                return <div key={link.label} className='mr-px px-6 py-2 rounded-3xl cursor-pointer hover:bg-cyan focus:bg-cyan hover:text-white focus:text-white'>{link.label}</div>
                            })}
                        </div>
                    }
                </div>
                {isInBigScreen
                    ? <div className='flex justify-between text-custom-gray'>
                        { isLogIn 
                          ? <div className='flex'>
                                <div className='flex justify-center px-6 py-2'>Hi, { currentUser?.displayName }</div>
                                <div onClick={() => {handleSignOut()}} className='auth-btn flex justify-center px-6 py-2 rounded-3xl cursor-pointer hover:bg-cyan focus:bg-cyan hover:text-white focus:text-white'>Log Out</div>
                            </div>
                          : authLinks.map(link => {
                            return <div key={link.label} className='auth-btn flex justify-center px-6 py-2 rounded-3xl cursor-pointer hover:bg-cyan focus:bg-cyan hover:text-white focus:text-white'><Link to={link.link}>{link.label}</Link></div>
                        })}
                    </div>
                    : <div onClick={(e) => { toggleMenu(e) }} className='flex justify-center flex-col cursor-pointer'>
                        <div className='w-6 h-1 bg-custom-gray'></div>
                        <div className='my-1 w-6 h-1 bg-custom-gray'></div>
                        <div className='w-6 h-1 bg-custom-gray'></div>
                    </div>
                }
            </div>

            {isShowNav &&
                <div onClick={closeNav} className='w-screen h-screen'>
                    <div className='mx-4 pt-8 pb-4 text-white text-lg text-center font-bold bg-dark_violet rounded-lg'>
                        <ul>
                            {mainLinks.map(link => {
                                return <li key={link.label} className='mb-4 mx-auto py-2 w-10/12 rounded-3xl cursor-pointer hover:bg-cyan focus:bg-cyan'>{link.label}</li>
                            })}
                        </ul>
                        <div className='mx-auto my-6 w-72 h-px bg-gray-400 opacity-50'></div>
                        <ul>
                            { isLogIn 
                                ? <li onClick={() => {handleSignOut()}} className='mb-4 mx-auto py-2 w-10/12 rounded-3xl cursor-pointer hover:bg-cyan focus:bg-cyan'>Log Out</li>
                                : authLinks.map(link => {
                                return <li key={link.label} className='mb-4 mx-auto py-2 w-10/12 rounded-3xl cursor-pointer hover:bg-cyan focus:bg-cyan'><Link to={link.link}>{link.label}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>

            }
        </div>

    )
}

export default Header