import React from 'react';
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

export function SignIn() {

    function handleTwitterSignIn(){
        const provider = new TwitterAuthProvider();
        const auth = getAuth();
        auth.languageCode = 'it';
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = TwitterAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log('Users token: ', token);
                const secret = credential.secret;
                console.log('Users secret: ', secret);
                const user = result.user;
                console.log('User: ', user);

            }).catch((error) => {
                const errorCode = error.code;
                console.log('Error code: ', errorCode);
                const errorMessage = error.message;
                console.log('Error message: ', errorMessage);
                const email = error.email;
                console.log('Email: ', email);
                const credential = TwitterAuthProvider.credentialFromError(error);
                console.log('Credential: ', credential);
        })
    }

    function handleFacebookSignIn(){
        //amazing code will be here
    }

    return (
        <div>
            <button onClick={handleTwitterSignIn}>Sign in to twitter</button>
            <button onClick={handleFacebookSignIn} disabled={true}>Sign in to facebook</button>
        </div>
    );
}