import React, { useEffect, useState } from "react";
import "./Feed.css";
import Createlcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions";
import ImageIcon from '@material-ui/icons/Image';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Posts from "./Post";
import { db } from './firebase'
import firebase from 'firebase/compat/app'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
    const [input, setInput] = useState('');
    const [post, setpost] = useState([]);
    const user=useSelector(selectUser)


    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot => (
            setpost(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))

    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName ,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })

        setInput("");
    };

    

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Createlcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>

            <FlipMove>
            {post.map(({ id, data: { name, description, message, photoUrl } }) => 
            (<Posts 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />))}

            </FlipMove>

            
            
        </div>
    );
}

export default Feed;