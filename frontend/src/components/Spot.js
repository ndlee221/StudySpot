import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import locationData from "./Data.json";
import SearchBar from "./SearchBar";
import React from "react";


function Spot({ setHome }) {

    const createCards =
        <div>
            <div className="card1">
                <div>
                    Rating:
                </div>
                <div>
                    I love this study spot. It's great.
                </div>
            </div>
        </div>



    return (
        <div>
            <div className="d-flex">
                <div className="d-flex ">
                    <a className='mt-3 mx-4 title fs-1' onClick={() => setHome(true)}>
                        StudySpots
                    </a>
                </div>
                <div className="searchBarSpot">
                    <SearchBar placeholder={"Enter a Study Spot..."} data={locationData}/>
                </div>
            </div>

            <div className="name-container ">
                <p className="mt-5 name">
                    Building Name
                </p>
                <a className="location ">Location</a>
                <p>
                    Busy Rating:
                </p>
                <div className="card-container">
                    {createCards}
                </div>
            </div>
        </div>
    );
}

export default Spot;