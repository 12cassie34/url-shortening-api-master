import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { changeSignUpName, changeSignUpEmail, changeSignUpPassword } from '../store/auth-slice'
import { signUpUser } from '../store/auth-action'

import banner from '../images/banner.svg'

function SignUp() {
    const signUpName = useSelector(state => state.auth.signUpName)
    const signUpEmail = useSelector(state => state.auth.signUpEmail)
    const signUpPassword = useSelector(state => state.auth.signUpPassword)

    const dispatch = useDispatch()

    const handleUserName = (name) => {
        dispatch(changeSignUpName(name))
    }
    const handleEmail = (email) => {
        dispatch(changeSignUpEmail(email))
    }
    const handlePassword = (password) => {
        dispatch(changeSignUpPassword(password))
    }
    const handleSignUp = () => {
        dispatch(signUpUser({
            userName: signUpName,
            email: signUpEmail,
            password: signUpPassword
        }))
    }

    return (
        <div className="flex flex-col items-center justify-center my-8 xl:flex-row xl:justify-around">
            <div className='mb-8 overflow-x-hidden'>
                <img src={banner} className='welcome__banner mx-auto' />
            </div>
            <div className="px-4 py-8 w-72 bg-dark_violet rounded-lg shadow-md
                            xl:w-1/2 xl:px-12">
                <h2 className="mb-8 text-5xl text-white font-bold">Sign Up</h2>
                <form>
                    <div className="mt-8 mb-4">
                        <h3 className="mb-3 text-xl text-white font-bold">User Name</h3>
                        <input onChange={(e) => {handleUserName(e.target.value)}} type="text" className="w-full h-10 rounded-lg indent-4 focus:outline-2 focus:outline-cyan focus:outline-red"
                            placeholder="User Name" autoComplete="username"></input>
                    </div>
                    <div className='mb-4'>
                        <h3 className="mb-3 text-xl text-white font-bold">Email</h3>
                        <input onChange={(e) => {handleEmail(e.target.value)}} type="text" className="w-full h-10 rounded-lg indent-4 focus:outline-2 focus:outline-cyan focus:outline-red"
                            placeholder="Email" autoComplete="username"></input>
                    </div>
                    <div>
                        <h3 className="mb-3 text-xl text-white font-bold">Password</h3>
                        <input onChange={(e) => {handlePassword(e.target.value)}} type="password" className="w-full h-10 rounded-lg indent-4 focus:outline-2 focus:outline-cyan focus:outline-red"
                            placeholder="Password" autoComplete="current-password"></input>
                    </div>
                </form>
                <div>
                    <button onClick={handleSignUp} className='mt-8 w-full h-14 bg-cyan text-white text-xl font-bold rounded-lg'>
                        Sign Up
                    </button>
                </div>
                <div className='mt-4 text-white'>
                <span>Already have an account? Log in&nbsp;</span> 
                <span className='text-cyan'><Link to="/login">here!</Link></span>
            </div>
            </div>
        </div>
    )
}

export default SignUp