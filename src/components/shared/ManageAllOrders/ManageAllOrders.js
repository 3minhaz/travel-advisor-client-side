import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';

const ManageAllOrders = () => {
    const { user } = useAuth();
    console.log();
    const [services, setServices] = useState([]);
    const [manageOrders, setManageOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        fetch('https://travel-advisor.onrender.com/manageAllOrders')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    useEffect(() => {
        fetch('https://travel-advisor.onrender.com/myOrder')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [isDeleted])



    const handleServiceDelete = id => {
        const proceed = window.confirm('are you sure ,you want to delete');
        if (proceed) {
            fetch(`https://travel-advisor.onrender.com/manageService/${id}`, {
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

        const url = `https://travel-advisor.onrender.com/update/${id}`;
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
            <h2 className="text-center my-3">Total Orders: {manageOrders.length}</h2>
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