import React from "react";
import './App.scss';

import {Form} from "./components/Form";
import {SignIn} from "./components/SignIn";

import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";


const AUTH_HANDLER = 'https://outside-posting.firebaseapp.com/__/auth/handler';
const API_KEY = '6AtrcVwHRnPkX3EX9t2nLJUyu';
const API_KEY_SECRET = 'PHZPyufszC9dszAaQnqWWRYRcwrFl6ts0D4BMPhUr3jgutY36G'
const CLIENT_ID = "bXFGTXV1bnJuVXhyTjBMbGhqaGk6MTpjaQ";
const CLIENT_SECRET = "UizWyu9WnDL58ysRHm1waCsgmaXLxswQofdi4lkKhKp5bKcT1V";



function App() {

    const [signedIn] = useAuthState(auth)

  return (
      <>
          {signedIn ? <Form /> : <SignIn />}
      </>

  );
}

export default App;
