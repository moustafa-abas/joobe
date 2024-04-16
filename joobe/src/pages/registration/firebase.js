// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from'firebase/auth';
const firebaseConfig = {
apiKey: "AIzaSyCFahbbshT0tuudalFM-v4-rNPTHcVleX0",
authDomain: "jobee-sign.firebaseapp.com",
projectId: "jobee-sign",
storageBucket: "jobee-sign.appspot.com",
messagingSenderId: "389392145659",
appId: "1:389392145659:web:40361605f8218d056ba45e",
measurementId: "G-EWY2KSWJT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);