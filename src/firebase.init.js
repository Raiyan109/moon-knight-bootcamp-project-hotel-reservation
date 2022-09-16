// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq2uuzlcSH_Vnk57rYgH6aZIzN_YmXM4A",
    authDomain: "moon-knight-bootcamp-hotel-res.firebaseapp.com",
    projectId: "moon-knight-bootcamp-hotel-res",
    storageBucket: "moon-knight-bootcamp-hotel-res.appspot.com",
    messagingSenderId: "134427436044",
    appId: "1:134427436044:web:37360795db39bb4d343a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth