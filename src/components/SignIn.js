import React, {useState} from 'react';
import firebase from 'firebase/compat/app';
import {auth} from "../firebase";

export function SignIn() {
    function handleSignIn(){
        const provider = new firebase.auth.TwitterAuthProvider()
            auth.signInWithPopup(provider);
    }

    return (
        <div>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
}