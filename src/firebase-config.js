import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAzp2qWj7Jy_Y8a3l0dNC43xpnfuEqtaE0',
    authDomain: 'url-shortening-api-maste-b525c.firebaseapp.com',
    projectId: 'url-shortening-api-maste-b525c',
    storageBucket: 'url-shortening-api-maste-b525c.appspot.com',
    messagingSenderId: '301685983096',
    appId: '1:301685983096:web:15b3e5259cee07584daa8d',
    measurementId: 'G-0TYQDY5RST',
}

// initialize our project
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)