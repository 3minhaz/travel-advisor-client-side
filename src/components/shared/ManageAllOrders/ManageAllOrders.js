import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [services, setServices] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/manageAllOrders')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [isDeleted])
    const handleServiceDelete = id => {
        fetch(`http://localhost:5000/manageService/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                const proceed = window.confirm('are you sure ,you want to delete');
                if (proceed) {
                    if (data.deletedCount) {
                        alert('deleted successfully');
                        setIsDeleted(true);
                    }
                }
            })
    }

    return (
        <div >
            <h2>Total offer: {services.length}</h2>
            {
                services.map((service, index) => <div
                    key={service._id}
                    className="d-flex align-items-center mx-5 mb-3">
                    <span className="w-50">serial: {index + 1}</span>
                    <h2 className="mx-3 w-75">offer:{service.offer}</h2>
                    <p className="mx-3 w-50">Location: {service.location}</p>
                    <button className="btn btn-danger h-50 ms-3" onClick={() => handleServiceDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;