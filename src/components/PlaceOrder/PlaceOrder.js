import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    console.log(details);
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
                    <input {...register("firstName")} />

                    <input type="submit" value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;