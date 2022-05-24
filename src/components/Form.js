import React from 'react';
import {useState, useEffect} from "react";
import {SignOut} from "./SignOut";
import axios from "axios";
import {db} from "../firebase";
import {collection, getDocs, addDoc, deleteDoc, doc} from "firebase/firestore"


export function Form ( { signedIn } ) {
    const [postText, setPostText] = useState('');
    const [postSent, setPostSent] = useState([]);
    const [pageId, setPageId] = useState('');

    const providerID = signedIn.providerData[0].providerId;
    const cl = providerID.slice(0,-4);

    // _____ Function for getting posts from database _____
    const postCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostSent(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPosts()
            .catch(error => {
                console.log(error.message);
                console.log('przekroczono limit dzienny :c');
            });
    })

    // _____ Function for sending posts to database _____
    const handleAddPost = async () => {
        await addDoc(postCollectionRef, {site: `${cl}`, text: postText});
    }

    // _____ Function for removing posts from database _____
    const handleRemove = async (idx, postId) => {
        const databasePostId = doc(db, "posts", postId);
        await deleteDoc(databasePostId)
        setPostSent(postSent.filter(item => postSent.indexOf(item) !== idx));
    };

    function postToFacebookPage(e){
        e.preventDefault();
        console.log(pageId);
        handleAddPost();
        axios
            .post(`https://graph.facebook.com/${pageId}/feed?`, {
                message: postText,
                access_token:
                "EAAIcPAnQrEIBAIRms9uq0hZCLjxC5OMAfU4IdpwZCdfI5x1CbyODXYz74kb57isFU5ai6bW3tpr4MQ9FZBHX4BH54lPE2jfAMNqQW6UftGWzEJjP5s3YCBK7ZBPZAG0G95HAwOPJ0vzXieAUsKHsfVPu6JTcherJRgaDXmFWIMIDCtcRZCdUUdxqeUxDUyHUwZD"
            })
            .then(result => {
                const data = result.data;
            },
                error => {
                console.log(error);
                })
    }

    return (
        <div className={`App App-${cl}`}>
            <form className="App__form">
                <label className={`App__form-label App__form-label-${cl}`}>Write your post below:
                    <textarea className="App__form-textarea"
                        placeholder="Here..."
                        value={postText}
                        onChange={e => setPostText(e.target.value)} />

                    {providerID === 'twitter.com' ?
                        <a className='btn btn__twitter btn__twitter-share'
                           target="_blank"
                           href={`https://twitter.com/intent/tweet?text=${postText}`}
                           onClick={handleAddPost}>
                            Tweet</a> :
                        <section className='facebook-input'>
                            <p className='where-id'>Where to find page ID?
                                <span className='where-id-answer'>On your site's main screen click
                                    <strong className='where-id-answer__strong'>More</strong> ->
                                    <strong className='where-id-answer__strong'> Information</strong>.
                                    The site's ID should be displayed at the bottom.</span>
                            </p>
                            <div className='facebook-input__inside'>
                                <input
                                    className='facebook-id-input'
                                    type="text"
                                    placeholder="Write PageID here..."
                                    onChange={e => setPageId(e.target.value)}/>

                                <button className='btn btn__facebook'
                                        onClick={postToFacebookPage}>
                                    Facebook</button>
                            </div>

                        </section>
                    }
                </label>


            </form>
            <SignOut nameOfClass={cl}/>
            {postSent.length > 0 ?
                <ul className='post-list'>Your sent posts:
                    {postSent.map(post => (
                        <li className='post-list__element' key={postSent.indexOf(post)}>
                            <span className='post-list__element-title'>{post.site} -</span>
                            <span>{post.text}</span>

                            <button className={`post-list__remove btn__${cl}`} onClick={() => handleRemove(postSent.indexOf(post), post.id)}>Remove</button>
                        </li>
                    ))}
                </ul> :
                <p></p>
            }

        </div>
    );
}