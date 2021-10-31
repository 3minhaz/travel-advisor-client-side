import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {

        fetch('https://thawing-sands-06340.herokuapp.com/manageAllOrders')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    return (

        <div className="row row-cols-md m-5 g-3">

            {
                offers.map(offer =>
                    <div
                        key={offer._id}
                        className="col-md-4 mb-5 h-100  col-sm-1">
                        <img height='300px' className="w-100 " src={offer.img} alt="" />
                        <h3>{offer.location}</h3>
                        <p>{offer?.details.slice(0, 40)}...</p>
                        <Link to={`/placeOrder/${offer?._id}`}><button>Book now</button></Link>
                    </div>
                )
            }
        </div>
    );
};

export default Offer;