import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../firebase-config'

export const signUpUser = (signUpInfo) => {
    return async () => {
        const handleSignUp = async () => {
            await createUserWithEmailAndPassword(
                auth,
                signUpInfo.email,
                signUpInfo.password
            )
        }
        const handleChangeUserName = async () => {
            const auth = getAuth()
            await updateProfile(auth.currentUser, {
                displayName: signUpInfo.userName,
            })
        }
        try {
            await handleSignUp()
            await handleChangeUserName()
        } catch (error) {
            console.log(error)
        }
    };
}

export const logInUser = (logInInfo) => {
    return async () => {
        const handleLogin = async () => {
            await signInWithEmailAndPassword(auth, logInInfo.email, logInInfo.password)
        }
        try {
            await handleLogin()
        } catch (error) {
            console.log(error)
        }
    }
}