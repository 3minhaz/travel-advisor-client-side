import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';

const ManageAllOrders = () => {
    const { user } = useAuth();
    console.log();
    const [services, setServices] = useState([]);
    const [manageOrders, setManageOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        fetch('https://thawing-sands-06340.herokuapp.com/manageAllOrders')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    useEffect(() => {
        fetch('https://thawing-sands-06340.herokuapp.com/myOrder')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [isDeleted])



    const handleServiceDelete = id => {
        const proceed = window.confirm('are you sure ,you want to delete');
        if (proceed) {
            fetch(`https://thawing-sands-06340.herokuapp.com/manageService/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {


                    if (data.deletedCount) {
                        alert('deleted successfully');
                        setIsDeleted(true);
                    }

                })
        }

    };

    const handleUpdate = (id) => {

        const url = `https://thawing-sands-06340.herokuapp.com/update/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('status approved');
                    setIsDeleted(true)
                }
            })
    }


    return (
        <div>
            <h2>Total offer: {services.length}</h2>
            {/* {
                services.map((service, index) => <div
                    key={service._id}
                    className="d-flex align-items-center mx-5 mb-3">
                    <span className="w-50">serial: {index + 1}</span>
                    <h2 className="mx-3 w-75">offer:{service.offer}</h2>
                    <p className="mx-3 w-50">Location: {service.location}</p>
                    <button className="btn btn-danger h-50 ms-3" onClick={() => handleServiceDelete(service._id)}>Delete</button>
                </div>)
            } */}
            <div>
                {manageOrders.map((order, index) => <div
                    key={order._id}
                    className="d-flex justify-content-between    align-items-between p-3 m-4 border-secondary bg-light"
                >
                    <span className="p-2">Serial: {index + 1}</span>
                    <span > <h5 className="">Name: {order?.details.offer}</h5></span>
                    <span ><p >email: {order.email}</p></span>
                    {/* <p className="mx-3 w-50">Location: {order?.details.location}</p> */}
                    <small className="">id: {order._id}</small>
                    < span > <p className=""> Status: {order.status}</p></span>
                    <button className="btn btn-danger h-50" onClick={() => handleServiceDelete(order._id)}>Delete</button>
                    <button className="btn btn-success h-50" onClick={() => handleUpdate(order._id)}>Approved</button>
                </div>)
                }
            </div >
        </div >
    );
};

export default ManageAllOrders;