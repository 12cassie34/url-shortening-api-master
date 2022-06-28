import { useDispatch } from 'react-redux'

import { changeEmail, changePassword } from '../store/login-slice'

import banner from '../images/banner.svg'

import './Login.css'

function Login() {
    const dispatch = useDispatch()
    const handleEmailInput = (value) => {
        dispatch(changeEmail(value))
    }
    const handlePasswordInput = (value) => {
        dispatch(changePassword(value))
    }

    return (
        <div className="flex flex-col items-center justify-center my-8 xl:flex-row xl:justify-around">
            <div className='mb-8 overflow-x-hidden'>
                <img src={banner} className='welcome__banner mx-auto' />
            </div>
            <div className="px-4 py-8 w-72 bg-dark_violet rounded-lg shadow-md
                            xl:w-1/2 xl:px-12">
                <h2 className="mb-8 text-5xl text-white font-bold">Login</h2>
                <form>
                    <div className="mb-8">
                        <h3 className="mb-3 text-xl text-white font-bold">Email</h3>
                        <input onChange={(e) => {handleEmailInput(e.target.value)}} type="text" className="w-full h-10 rounded-lg indent-4 focus:outline-2 focus:outline-cyan focus:outline-red"
                            placeholder="Email" autoComplete="username"></input>
                    </div>
                    <div>
                        <h3 className="mb-3 text-xl text-white font-bold">Password</h3>
                        <input onChange={(e) => {handlePasswordInput(e.target.value)}} type="password" className="w-full h-10 rounded-lg indent-4 focus:outline-2 focus:outline-cyan focus:outline-red"
                            placeholder="Password" autoComplete="current-password"></input>
                    </div>
                </form>
                <div>
                    <button className='mt-8 w-full h-14 bg-cyan text-white text-xl font-bold rounded-lg'>
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login