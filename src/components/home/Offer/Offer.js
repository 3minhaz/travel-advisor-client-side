import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://thawing-sands-06340.herokuapp.com/manageAllOrders')
            .then(res => res.json())
            .then(data => {
                setOffers(data)
                setLoading(true)
            });

    }, [])

    return (

        <div>
            {loading ? <div id="offer" className="row row-cols-md m-5 g-3">
                <h2>Our offers</h2>
                {
                    offers.map(offer =>
                        <div
                            key={offer._id}
                            className="col-md-4 mb-5 h-100  col-sm-1">
                            <img height='300px' className="w-100 " src={offer.img} alt="" />
                            <h3>{offer.location}</h3>
                            <p>{offer?.details.slice(0, 40)}...</p>
                            <Link to={`/placeOrder/${offer?._id}`}><button style={{ backgroundColor: "#0071c2", border: 'none', borderRadius: '6px', padding: '4px 8px', color: "white" }}>Book now</button></Link>
                        </div>
                    )
                }
            </div> : <div className="d-flex justify-content-center my-4"> <Spinner animation="border" variant="info" /></div>}
        </div>
    );
};

export default Offer;