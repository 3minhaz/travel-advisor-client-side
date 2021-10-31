import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [isDeleting, setIsDeleting] = useState(null);
    const [userBookings, setUserBookings] = useState([]);
    // console.log(user.email);
    useEffect(() => {
        fetch(`https://thawing-sands-06340.herokuapp.com/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => setUserBookings(data))
    }, [isDeleting])
    const handleDeleteBooking = id => {
        const proceed = window.confirm('are you sure delete the items');
        if (proceed) {
            fetch(`https://thawing-sands-06340.herokuapp.com/myOrder/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {


                        alert('deleted successfully');
                        setIsDeleting(true);

                    }
                })
        }

    }
    return (
        <div className="row mx-auto m-3">
            <h2>My Orders</h2>
            {userBookings.map(booking => <div
                className="col-md-4 my-3"
                key={booking._id}
            >
                {console.log(booking)}
                <img className="w-75 h-50" src={booking.details.img} alt="" />
                <p>order id: {booking._id}</p>
                <p>name: {booking.details.offer}</p>
                <p>status: {booking.status}</p>
                <button className="btn btn-danger" onClick={() => handleDeleteBooking(booking._id)}>Delete</button>
            </div>)
            }
        </div>
    );
};

export default MyOrders;