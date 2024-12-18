import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { auth } from './firebase';

//signup user
export const signUp = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
};

//signin user
export const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
};

//signout user
export const signOutUser = ()=>{
    return signOut(auth);
};


