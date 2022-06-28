import { getAuth, signInWithRedirect, TwitterAuthProvider } from "firebase/auth";
import {FacebookAuthProvider} from "firebase/auth";

export function SignIn() {
    function handleTwitterSignIn(){
        const provider = new TwitterAuthProvider();
        const auth = getAuth();
        auth.languageCode = 'it';
        signInWithRedirect(auth, provider)
            .then((result) => {
                const credential = TwitterAuthProvider.credentialFromResult(result);
                console.log(credential);
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
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        auth.languageCode = 'it';
        signInWithRedirect(auth, provider)
            .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                const email = error.email;
                console.log(email);
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(credential);
            })
    }
    return (
                <div className='sign-in'>
                    <button className='btn btn__twitter ' onClick={handleTwitterSignIn}>Twitter</button>
                    <button className='btn btn__facebook' onClick={handleFacebookSignIn}>Facebook</button>
                </div>
    );
}