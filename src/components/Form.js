import React from 'react';
import {useState} from "react";
import {SignOut} from "./SignOut";


export function Form () {
    const [postText, setPostText] = useState('');
    const [postSent, setPostSent] = useState([]);

    function handleClick(event){
        event.preventDefault();
        setPostSent(postSent => [...postSent, postText]);
        setPostText('');

        const data = {
            text: `${postText}`
        };
        fetch(`https://api.twitter.com/2/tweets`, {
            method: 'Post',
            body: {
                "text": "Hello World!"
            },
            headers:{
                'Access-Control-Allow-Origin': `http://localhost:3000`,
                'Content-Type':'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            });

        console.log('sent');
    }

    const handleRemove = (id) => {
        setPostSent(postSent.filter(item => postSent.indexOf(item) !== id));
    };

    return (
        <div className="App">
            <form className="App__form">
                <label className="App__form-label">Write your post below:
                    <textarea
                        placeholder="Here..."
                        value={postText}
                        onChange={e => setPostText(e.target.value)} />
                    <button onClick={handleClick}>Send</button>
                </label>

            </form>
            <ul>
                {postSent.map(post => (
                    <li key={postSent.indexOf(post)}>{post}
                        <button onClick={() => handleRemove(postSent.indexOf(post))}>Remove</button>
                    </li>
                ))}
            </ul>
            <SignOut />
        </div>
    );
}