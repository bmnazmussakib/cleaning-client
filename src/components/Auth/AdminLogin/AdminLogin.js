import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './AdminLogin.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AdminContext, UserContext } from '../../../App';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from '../firebase.config';
import axios from 'axios';

import { Button } from '@material-ui/core';
import { FcGoogle } from 'react-icons/fc';
import { styled } from '@mui/material/styles';
import { toast } from 'react-toastify';


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
        axios.get('https://eco-clean-api.herokuapp.com/admin-email')
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
                        

                        toast.success('Login Successfully', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                        })

                        setTimeout(() => {

                            navigate(form);
                            // loadData();
            
                        }, 500);
                    }
                }else{
                    // document.getElementById('sorry').style.display = 'block';

                    toast.error('You are not an Admin', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                    })
                    // setTimeout(() => {
        
                    //     navigate('/service-booking-list');
        
                    // }, 500);
                }





            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });



    }

    const LoginButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 20,
        padding: '10px 16px',
        border: '2px solid',
        borderRadius: '50px',
        lineHeight: 1.5,
        borderColor: '#696969',
        color: '#696969',
        fontFamily: 'Rajdhani',
        fontWeight: 900,
        '&:hover': {
            borderColor: '#90c73e',
            color: '#90c73e',
    
        },
    });

    return (
        <>
            <Header />
            <div className="container">
                <div className="login">
                    <h1 className='login-title'>Admin Login</h1>
                    {/* <button className='login-btn' onClick={handleGoogleSignIn}>Login with Google</button> */}

                    <LoginButton variant="outlined" size="large" onClick={handleGoogleSignIn}> <FcGoogle className='fs-2 me-3'  /> Continue with Google</LoginButton>

                    <h2 className="text-danger" id="sorry" style={{display: 'none'}}>Sorry You are not an Admin !!!</h2>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminLogin;