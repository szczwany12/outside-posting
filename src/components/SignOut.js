import React from 'react';
import {auth} from "../firebase";

export function SignOut({nameOfClass}) {
    return (
        <div>
            <button className={`btn btn__${nameOfClass}`} onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    );
}