import React, { useEffect, useState } from 'react';
import './AddServiceBody.css';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';




const AddServiceBody = () => {

    const navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
        fetch(`https://eco-clean-api.herokuapp.com/manage-services/update-service/${id}`)
            .then(res => res.json())
            .then(data => {
                setData({ name: data.name, description: data.description })
                setImgURL(data.imgURL)
            })
    }, [id])


    const inititalState = {
        name: "",
        description: "",
        price: 0
    }

    const [data, setData] = useState(inititalState);
    const [imgURL, setImgURL] = useState("");
    // let [service, setService] = useState();

    const { name, description, price } = data;



    console.log(data);
    console.log(imgURL);

    let serviceInfo = { ...data, imgURL };
    // console.log(serviceInfo);


    // ----------Submit----------
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !description || !imgURL || !price) {

            toast.warn('Please fill the input !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
        } else {

            // console.log(serviceInfo);

            if (!id) {
                axios.post('https://eco-clean-api.herokuapp.com/add-service', {
                    name, description, imgURL, price
                    // serviceInfo
                }).then(() => {

                    setData(inititalState);
                    setImgURL("");

                    document.getElementById('service-name').value = '';
                    document.getElementById('service-description').value = '';
                    document.getElementById('service-img').value = '';

                }).catch((err) => {
                    console.log(err);
                    toast.error(err, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                    })
                })
                toast.success('Service Added Successfully', {
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
                    navigate('/manage-services')
                }, 500);
            } else {
                axios.put(`https://eco-clean-api.herokuapp.com/manage-services/update-service/${id}`, {
                    name, description, imgURL, price
                    // serviceInfo
                }).then(() => {

                    setData(inititalState);
                    setImgURL("");

                    document.getElementById('service-name').value = '';
                    document.getElementById('service-description').value = '';
                    document.getElementById('service-img').value = '';
                    document.getElementById('service-price').value = 0;

                })
                    .catch((err) => {
                        toast.error(err, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                        })
                    })

                toast.success('Service Updated Successfully', {
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
                    navigate('/manage-services')
                }, 500);
            }
        }
    }


    // ----------Input value----------
    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setData({ ...data, [name]: value });


    }



    // ------------Image Upload-------------------
    const handleImgUpload = (e) => {
        // console.log(e.target.files[0]);

        const imageData = new FormData();
        imageData.set('key', '9dce04044780a8e8c6cbf435542ead0b');
        imageData.append('image', e.target.files[0]);

        const requestOptions = {
            method: 'POST',
            body: imageData
        };

        fetch('https://api.imgbb.com/1/upload', requestOptions)
            .then(response => response.json())
            .then(data => {
                setImgURL(data.data.display_url);
            })
            .catch(error => {
                console.error(error)
            });
    }






    return (
        <div className='add-service py-3'>
            <div className="container">
                <h1 className='add-service-title section-subtitle text-center'>Add Service</h1>


                {/* Form */}
                <div className="row display-flex justify-content-center">
                    <div className="col-10">
                        <form onSubmit={handleSubmit}>

                            <div className="row mb-3">
                                <div className="col">
                                    <input type="text" className="form-control service-name" placeholder="Service Name" id='service-name' name='name' onChange={handleInputChange} value={name} />
                                </div>
                                <div className="col">
                                    <input type="file" className="form-control service-img" id='service-img' name='img' onChange={handleImgUpload} />
                                </div>
                            </div>

                            <div className="mb-3">
                                <input type="number" className="form-control service-price" id='service-price' name='price' placeholder="Price" onChange={handleInputChange} value={price} />
                            </div>

                            <div className="mb-3">
                                <textarea className="form-control service-description" id="service-description" rows="6" placeholder="Description" name='description' onChange={handleInputChange} value={description}></textarea>
                            </div>

                            <button type="submit" className="blue-btn review-submit-btn" >Submit</button>
                        </form>

                        {/* <form action="/add-service" method="post">
                            <input type="text" name='name' placeholder='name' />
                            <input type="text" name='address' placeholder='adress' />
                            <input type="number" name='phone' placeholder='phone'/>
                            <input type="submit" value="Submit" />
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServiceBody;