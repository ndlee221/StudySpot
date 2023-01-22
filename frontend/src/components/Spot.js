import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import locationData from "./Data.json";
import SearchBar from "./SearchBar";
import React from "react";
import PlacementExample from "./Cards";
import BasicExample from "./Cards";
import { Button } from "react-bootstrap";
import axios from 'axios';
import cors from 'cors';
import { useEffect, useState } from "react";
import { create } from "@mui/material/styles/createTransitions";
import TextExample from "./Cards"


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
        <li className="card-items">
            <TextExample review={review}/>
        </li>
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
                <h1 className="name">
                    {buildingData ? buildingData.name : null}
                </h1>
                <div>
                    Location: 
                </div>
                <div>
                    Capacity:  {buildingData ? buildingData.busy : null}
                </div>
                <div className="cardss">
                    <ul className="card_container">
                        {createCards}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Spot;