import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [isDeleting, setIsDeleting] = useState(null);
    const [userBookings, setUserBookings] = useState([]);
    // console.log(user.email);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setUserBookings(data))
    }, [isDeleting])
    const handleDeleteBooking = id => {
        fetch(`http://localhost:5000/myOrder/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const proceed = window.confirm('are you sure delete the items')
                    if (proceed) {
                        alert('deleted successfully');
                        setIsDeleting(true);
                    }
                }
            })
    }
    return (
        <div className="row">
            <h2>My Orders</h2>
            {userBookings.map(booking => <div
                className="col-md-4 my-3"
                key={booking._id}
            >
                <p>{booking._id}</p>
                <button onClick={() => handleDeleteBooking(booking._id)}>delete</button>
            </div>)
            }
        </div>
    );
};

export default MyOrders;