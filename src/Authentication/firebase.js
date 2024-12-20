// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnUXLsREh-8DL9X9AFbghhnBSTlpqX3Mk",
  authDomain: "loginauth-789cd.firebaseapp.com",
  projectId: "loginauth-789cd",
  storageBucket: "loginauth-789cd.firebasestorage.app",
  messagingSenderId: "868883658423",
  appId: "1:868883658423:web:3e5bfd8243c675bfe53f32",
  measurementId: "G-CP7XWETR0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export default app;
