import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div id="gallery" className="row m-0 mb-5">
            <h1 style={{ color: "tomato" }} className="text-center mb-5">Our Gallery</h1>
            <div id="parent-one" className="parent ar-image col-md-6">

                <div className="  hover-content text-white ">
                    <p className="display-1 ">Turkey</p>
                    <p>Turkey is one of the world's top ten destination countries, with the highest percentage of foreign visitors arriving from Europe; specially Germany and Russia in recent years.[296] In 2019, Turkey ranked sixth in the world in terms of the number of international tourist arrivals, with 51.2 million foreign tourists visiting the country</p>
                </div>
            </div>
            <div id="parent-two" className="parent col-md-6">

                <div className="hover-content text-white text-center">
                    <p className="display-1 ">France</p>
                    <p>Two of the most amazing cities of this budget tour of Europe are Paris and France. Paris which is the starting point of the tour and Amsterdam which is the ending point of the tour are rich in cultural heritage. The tour includes guided tours of both the cities & Brussels with an English speaking & knowledgable tour manager who will tell you interesting stories and facts about the place. </p>
                </div>
            </div>
            <div id="parent-three" className="parent col-md-6">

                <div className="hover-content text-white text-center">
                    <p className="display-1 ">New York</p>
                    <p>Along with touring the whole city, you will also get an audio insightful onboard narration where you can listen to all the relevant information about the city of Manhattan</p>
                </div>
            </div>
            <div id="parent-four" className="parent col-md-6">

                <div className="hover-content text-dark text-center">
                    <p className="display-1 ">Switzerland</p>
                    <p>The charm of the Swiss Alps and the mesmerizing gothic architecture of Switzerland has been catering the tourists from all over the world. Offering a plethora of entertainment options and loads of beautiful sceneries to glance upon, a tour to Switzerland will provide you with a chance to have the best vacationing experience.

                        Culturally vibrant, efficiently run, and attractively set at the meeting of river and lake, Zürich is regularly recognized as one of the world's most liveable cities.</p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;