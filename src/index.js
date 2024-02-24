////////////////////////////////////////////
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFeREYEgrVj2cCzj71sP8pIAN3PXL-gQ0",
    authDomain: "natsitarz.github.io",
    projectId: "idmoto",
    storageBucket: "idmoto.appspot.com",
    messagingSenderId: "462593287282",
    appId: "1:462593287282:web:1deb427333f34e50c34eeb",
    measurementId: "G-8KBMZ08B5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);