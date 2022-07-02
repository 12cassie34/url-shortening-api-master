import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

export const signUpUser = (signUpInfo) => {
    return async (dispatch) => {
        const handleSignUp = async () => {
            const res = createUserWithEmailAndPassword(auth, signUpInfo.email, signUpInfo.password)
            return res
        }
        try {
            const singUpData = await handleSignUp()
        } catch (error) {
            console.log(error)
        }
    }
}