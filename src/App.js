import React from "react";
import './sass/App.scss';

import {Form} from "./components/Form";
import {SignIn} from "./components/SignIn";

import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";

function App() {
    const [signedIn] = useAuthState(auth);

  return (
      <>
          {signedIn ? <Form signedIn={signedIn}/> : <SignIn />}
      </>

  );
}

export default App;