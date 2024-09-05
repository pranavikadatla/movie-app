// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-bpnZSe6X6ggBlejI2WgFVb373CzUoJU",
  authDomain: "netflix-gpt-1dae3.firebaseapp.com",
  projectId: "netflix-gpt-1dae3",
  storageBucket: "netflix-gpt-1dae3.appspot.com",
  messagingSenderId: "479383669094",
  appId: "1:479383669094:web:ab55a0dd706090db7ea0a7",
  measurementId: "G-PE773620BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth();