import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import locationData from "./Data.json";
import SearchBar from "./SearchBar";
import React from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import cors from 'cors';
import { useEffect, useState } from "react";


const URL = "studyspot.onrender.com";

function Spot({ setHome }) {
    const [building, setBuilding] = useState(false);
    const [buildingData, setData] = useState(null);

    useEffect(() => {
        getBuildings();
    }, []);

    useEffect(() => {
        const queryURL = URL + "/building/IKB";
        console.log(buildingData);
        if (buildingData) {
            setBuilding(true);
        }
    }, [buildingData])

    async function getBuildings() {
        const data = await fetch("https://studyspot.onrender.com/building/IKB", { mode: 'cors' }).then((response) => {
            return response.json();
        })

        setData(data);
    }

    const createCards = building ? buildingData.reviews.map((review) =>
        <div>
            <div>
                {review.message}
            </div>
            <div>
                {review.date}
            </div>
            <div>
                {review.rating}
            </div>
        </div>
    ) : null






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
                    {/* {building.name} */}
                </p>
                <a className="location ">Location</a>
                <p>
                    Busy Rating: {buildingData ? buildingData.busy : null}
                </p>
                <div className="card-container">
                    {createCards}
                </div>
            </div>


        </div>
    );
}

export default Spot;