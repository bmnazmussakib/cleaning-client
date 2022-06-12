import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './MakeAdminBody.css';

const MakeAdminBody = () => {

    const [adminEmail, setAdminEmail] = useState("");
    // console.log(adminEmail);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAdminEmail({ ...adminEmail, [name]: value });
    }


    const { email } = adminEmail;
    const handleOnSubmit = (e) => {
        e.preventDefault();


        if (!email) {
            alert("Please fill the input");
        } else {
            axios.post('https://eco-clean-api.herokuapp.com/make-admin', {
                email
            })
            
            toast.success('New Admin Added 😍', {
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

                window.location.reload()

            }, 5000);
        }
    }


    return (
        <div className='make-admin py-3'>
            <div className="container">
                <h1 className='make-admin-title section-subtitle text-center'>Make Admin</h1>

                <form onSubmit={handleOnSubmit} className="row g-3 d-flex justify-content-center">
                    <div className="col-8">
                        <input type="text" name='email' onChange={handleOnChange} className="form-control admin-email py-3" placeholder="example@email.com" id='admin-email' />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="blue-btn make-admin-btn mb-3">Confirm identity</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default MakeAdminBody;