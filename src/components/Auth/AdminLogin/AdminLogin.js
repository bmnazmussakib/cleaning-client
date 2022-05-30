import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './AdminLogin.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from '../firebase.config';
import axios from 'axios';

const AdminLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { admin } = useContext(UserContext);
    const [loggedInAdmin, setLoggedInAdmin] = admin;

    const { form } = location.state || { form: { pathname: '/' } };

    const adminToken = localStorage.getItem('adminToken');

    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();


    const [adminEmail, setAdminEmail] = useState();
    console.log(adminEmail)

    const getAdminEmail = () => {
        axios.get('http://localhost:3030/admin-email')
            .then((response) => {
                // handle success
                // console.log(response.data);
                setAdminEmail(response.data)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        getAdminEmail();
    }, [])


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const { displayName, email, photoURL } = result.user;

                const findAdmin = adminEmail.find(adminEmail => adminEmail.email === email);
                console.log(findAdmin);

                if (findAdmin) {
                    localStorage.setItem('adminToken', token);
                    localStorage.setItem('body', credential);
                    localStorage.setItem('adminEmail', email);
                    localStorage.setItem('adminName', displayName);
                    localStorage.setItem('adminImg', photoURL);

                    const signedInAdmin = { name: localStorage.getItem('adminName'), email: localStorage.getItem('adminEmail'), img: localStorage.getItem('adminImg') };

                    setLoggedInAdmin(result.user);
                    if (token) {
                        navigate(form);
                    }
                }else{
                    document.getElementById('sorry').style.display = 'block';
                }





            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });



    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="login">
                    <h1 className=''>Admin Login</h1>
                    <button className='login-btn' onClick={handleGoogleSignIn}>Login with Google</button>
                    <br /><br /><br />
                    <button className='login-btn' onClick="">Logout</button>

                    <h2 className="text-danger" id="sorry" style={{display: 'none'}}>Sorry You are not an Admin !!!</h2>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminLogin;