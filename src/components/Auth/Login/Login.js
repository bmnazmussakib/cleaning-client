import React, { useContext, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';


import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from '../firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';




const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.state.form);

    const { login } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = login;

    const { form } = location.state || { form: { pathname: '/' } };


    const token = localStorage.getItem('token');



    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();


    if (token) {
        navigate('/')
        // setTimeout(() => navigate('/'))
    }

    // if (!firebase.apps.length) {
    //     firebase.initializeApp(firebaseConfig);
    // }



    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const { displayName, email, photoURL } = result.user;

                localStorage.setItem('token', token);
                localStorage.setItem('body', credential);
                localStorage.setItem('email', email);
                localStorage.setItem('displayName', displayName);
                localStorage.setItem('photoURL', photoURL);

                const signedInUser = { name: localStorage.getItem('displayName'), email: localStorage.getItem('email'), img: localStorage.getItem('photoURL') };
                // console.log(signedInUser);

                setLoggedInUser(result.user);
                if (token) {
                    navigate(form);
                }



            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });



    }




    const handleGoogleSignOut = () => {


        const auth = getAuth();
        signOut(auth)
            .then(() => {
            })
            .catch((error) => {
            });
        localStorage.removeItem("token");
        localStorage.removeItem('body');
        localStorage.removeItem('email');
        localStorage.removeItem('displayName');
        localStorage.removeItem('photoURL');
    }



    return (
        <>
            <Header />
            <div className="container">
                <div className="login">
                    <h1 className=''>User Login</h1>
                    <button className='login-btn' onClick={handleGoogleSignIn}>Login with Google</button>
                    <br /><br /><br />
                    <button className='login-btn' onClick={handleGoogleSignOut}>Logout</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;