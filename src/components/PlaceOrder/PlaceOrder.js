import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`https://thawing-sands-06340.herokuapp.com/book/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    const onSubmit = data => {
        data.email = user.email;
        data.details = details;
        data.status = 'pending';
        console.log(data);
        fetch(`https://thawing-sands-06340.herokuapp.com/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('booking successfully done, please got to my orders to check your order')
                    reset();
                }
            })
    };


    return (
        <div className="row row-cols-md m-4">
            <div className="col-md-6 col-sm-12">
                <img className="w-75" src={details.img} alt="" />
                <h2>{details.offer}</h2>
                <h3>{details.location}</h3>
                <p>{details.details}</p>
            </div>
            <div className="col-md-6 col-sm-12 ">
                <h3>Give your information and place order to book</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("Name")} className="m-2 w-50" placeholder="Enter your name" /> <br />
                    <input defaultValue={user.email} {...register("email_add_by_user")} className="m-2 w-50" placeholder="Enter your name" /> <br />
                    <input {...register("address")} className="w-50 m-2" placeholder="Your Address" /> <br />
                    <input {...register("mobile")} type="number" className="m-2 w-50" placeholder="contact no" /> <br />

                    <input style={{ backgroundColor: "#0071c2", borderRadius: '6px', padding: '4px 8px', color: "white" }} type="submit" value="Book now" className="m-2" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;