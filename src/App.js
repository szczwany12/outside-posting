import React from "react";
import './App.scss';

import {Form} from "./components/Form";
import {SignIn} from "./components/SignIn";

import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";


const AUTH_HANDLER = 'https://outside-posting.firebaseapp.com/__/auth/handler';

const TWEET_API_KEY = '6AtrcVwHRnPkX3EX9t2nLJUyu';
const TWEET_API_KEY_SECRET = 'PHZPyufszC9dszAaQnqWWRYRcwrFl6ts0D4BMPhUr3jgutY36G';
const TWEET_ACCESS_TOKEN = '1521423990757236738-uJGYfoPhMWOCwjFQK3ftQ8ZjIjxgmY';
const TWEET_ACCESS_TOKEN_SECRET = 'EV8GDGIxrPARHmQzonsnCMViLB9B7mG1US2BXuUBuaJPd';
const TWEET_CLIENT_ID = "bXFGTXV1bnJuVXhyTjBMbGhqaGk6MTpjaQ";
const TWEET_CLIENT_SECRET = "UizWyu9WnDL58ysRHm1waCsgmaXLxswQofdi4lkKhKp5bKcT1V";
const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAMbxcQEAAAAAalvSHJaBG4FsmOTx%2FU%2BkvW%2F3ULo%3DaiQExASasgRkzsnG2Vip7zhIpsY02vpNASMqf33TkbIEiBZtOK';




function App() {
    const [signedIn] = useAuthState(auth)

  return (
      <>
          {signedIn ? <Form /> : <SignIn />}
      </>

  );
}

export default App;