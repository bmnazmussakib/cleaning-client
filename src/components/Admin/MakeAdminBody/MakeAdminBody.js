import React from 'react';
import './MakeAdminBody.css';

const MakeAdminBody = () => {
    return (
        <div className='make-admin py-3'>
            <div className="container">
                <h1 className='make-admin-title section-subtitle text-center'>Make Admin</h1>

                <form className="row g-3 d-flex justify-content-center">
                    <div className="col-8">
                            <input type="text" className="form-control admin-email py-3" placeholder="example@email.com" id='admin-email' name='admin-email' />
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