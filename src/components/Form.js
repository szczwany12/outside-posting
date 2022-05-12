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
        console.log('sent');
    }

    const handleRemove = (id) => {
        setPostSent(postSent.filter(item => postSent.indexOf(item) !== id));
    };

    return (
        <div className="App">
            <form className="App__form">
                <label className="App__form-label">Choose a platform
                    <select>
                        <option value="twitter">Twitter</option>
                        <option value="facebook">Facebook</option>
                    </select>
                    <textarea
                        placeholder="Write your post here."
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