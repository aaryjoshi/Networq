import React, { useState } from 'react'
import "./Login.css"
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilepic, setProfilepic] = useState("")
    const dispatch = useDispatch();

    const logintoApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password).then(
            (userAuth) =>
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profilepic: userAuth.user.photoURL
                    }

                    )
                )
        ).catch((error)=>alert(error))
    };

    const register = () => {
        if (!name) {
            return alert("Please enter your full name")
        }

        auth.createUserWithEmailAndPassword(email, password).then
            ((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilepic,
                })

                    .then(() =>
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.id,
                            displayName: name,
                            photoURL: profilepic
                        }))
                    );

            })
            .catch((error) => alert(error));
    };

    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Full Name(required if registering)'></input>
                <input value={profilepic} onChange={e => setProfilepic(e.target.value)} type='text' placeholder='profile pic URL (optional)'></input>
                <input value={email} onChange={e => setEmail(e.target.value)} type='Email' placeholder='Email'></input>
                <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='password'></input>

                <button onClick={logintoApp}>Sign In</button>
            </form>

            <p>Not a member?
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>

    );
}

export default Login
