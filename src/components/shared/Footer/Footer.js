import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark text-white row m-0 p-5 footer">
            <div className="col-md-4">
                <h2>BD TRAVELLERS</h2>
                <p>Travelers across the country use the BD Traveller site and app to discover where to stay, what to do and where to eat based on guidance from those who have been there before. </p>
                <li></li>
                <li></li>
            </div>
            <div className="col-md-4">
                <h2>OUR ADDRESS</h2>
                <li>Contact: T : 123 456 789 0 ,(+321) 123 456 7890</li>
                <li>A : 80 PINE ST, 10TH FLOOR
                    NEW YORK, NY 10005, USA</li>
                <li>bdtravellers@mail.com</li>

            </div>
            <div className="col-md-4">
                <h2>QUICK LINKS</h2>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>GALLERY</li>
                <li>FAQS</li>
            </div>
            <hr />
            <h3 className="text-center">Copyright © 2021 BD TRAVELLERS</h3>

        </div>
    );
};

export default Footer;