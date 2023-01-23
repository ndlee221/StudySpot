import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "../Search/SearchBar";
import React from "react";
import { useEffect, useState } from "react";
import ReviewCard from "../Card/Cards"
import locationData from "../../data/Data.json"
import Modal from "../Modal/Modal";
import "./Spot.css"
import Dropdown from "../Dropdown/Dropdown";


const URL = "studyspot.onrender.com";

function Spot({ setHome }) {
    const [building, setBuilding] = useState(false);
    const [buildingData, setData] = useState(null);
    const [average, setAverage] = useState(0);
    const [ran, setRun] = useState(false);

    useEffect(() => {
        if (!ran) {
            getBuildings();
            console.log("ran once");
            getAvg();
            setRun(true);
        }

    }, []);




    useEffect(() => {
        const queryURL = URL + "/building/IKB";


        console.log(buildingData);
    }, [buildingData, average]);



    async function getBuildings() {
        const data = await fetch("https://studyspot.onrender.com/building/DMP", { mode: 'cors' }).then((response) => {
            return response.json();
        })
        setData(data);
    }

    async function getAvg() {
        const data = await fetch("https://studyspot.onrender.com/avg/DMP", { mode: 'cors' }).then((response) => {
            return response.json();
        })
        setAverage(data);
        console.log("Average " + data);
    }

    const createCards = buildingData ? buildingData.reviews.map((review, i) =>
        <li className="my-5 card-items" key={i}>
            <ReviewCard review={review} />
        </li>
    ) : null

    function getCapacity(capacity) {
        switch (capacity) {
            case 1:
                return "Not very crowded";
                break;
            case 2:
                return "Slightly crowded";
                break;
            default:
                return "Crowded";
        }

    }

    function getName(abbreviation) {
        let ret = locationData[0].abbreviation;
        locationData.map((res) => {
            if (res.abbreviation === abbreviation) {
                ret = res.name;
            }
        })
        return ret;
    }


    return (
        <div className="spot-container">
            <div className="homeAndSearchContainer">
                <div className="d-flex ">
                    <a className='mt-3 mx-4 title fs-1' onClick={() => setHome(true)}>
                        <h1 className='titleStudy'>Study</h1>
                        <h1 className='titleSpot'>Spots</h1>
                    </a>
                </div>
                <div className="searchBarSpot">
                    <SearchBar placeholder={"Enter a Study Spot..."} data={locationData} />
                </div>
            </div>

            <div>
                <p className="name">
                    {buildingData ? getName(buildingData.name) : null}
                </p>
            </div>

            <div className="locationInfoContainer">
                <div>
                    <a className="location ">Location</a>
                    <p className="rating">
                        Average Rating: {building ? null : parseInt(average)}
                    </p>
                </div>
                <div className="capacity">
                    <p >Capacity:  {buildingData ? getCapacity(buildingData.busy) : null}</p>
                    <p className="timestamp">last updated at {buildingData ? buildingData.last_updated_time : null}</p>
                    {/* <DropButton/> */}
                </div>
            </div>

            <Modal />

            <div className="cardss">
                <ul className="card_container">
                    {createCards}
                </ul>

            </div>
        </div>
    );
}

export default Spot;