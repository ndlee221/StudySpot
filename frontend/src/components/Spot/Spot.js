import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../Search/SearchBar'
import React from "react";
import { useEffect, useState } from "react";
import ReviewCard from "../Card/Cards"
import locationData from "../../data/Data.json"
import Modal from "../Modal/Modal";
import "./Spot.css"
import DropButton from "../Dropdown/Dropdown";
import { Icon } from '@iconify/react';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

let date = "";
let month = "";
let time = "";
let datestring = "";

const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  }

function Spot({ setHome, input, setInput }) {
    const [building, setBuilding] = useState(false);
    const [buildingData, setData] = useState(null);
    const [average, setAverage] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");



    useEffect(() => {
        getBuildings();
        console.log("Retrieved " + input);
        getAvg();
    }, [input]);

    useEffect(() => {
        if (rating) sendReview();

    }, [review])

    useEffect(() => {
        if (capacity != 0) sendCapacity();
    }, [capacity]);


    useEffect(() => {
        console.log(buildingData);
    }, [buildingData, average, input]);


    useEffect(() => {
        let currentDateTime = Date().toLocaleString()
        let year = "";
        time = currentDateTime.slice(currentDateTime.search(":") - 2);
        time = time.slice(0, time.search(" "));
        time = time.slice(0, time.length - 3);

        month = currentDateTime.slice(currentDateTime.search(" ") + 1);
        date = month.slice(month.search(" ") + 1);
        console.log(date)
        year = date.slice(date.search(" ") + 1);
        month = month.slice(0, month.search(" "));
        date = date.slice(0, date.search(" "));
        year = year.slice(2, year.search(" "));

        datestring = months[month]+ "-"+ date + "-" + year


        console.log(datestring);
        console.log(date);
        console.log(month);
        console.log(time);


    }, []);


    async function sendReview() {
        const queryURL = "https://studyspot.onrender.com/building/" + input + "/dte/" + datestring + "/msg/" + review + "/rate/" + rating;
        const data = await fetch(queryURL, { mode: 'cors' }).then(() => {
            console.log("Added Review Successfully")
            getBuildings();
        });
    }

    async function sendCapacity() {
        const queryURL = "https://studyspot.onrender.com/building/" + input + "/avail/" + capacity + "/time/" + time + "/day/" + date + "/month/" + month;

        if (capacity == 0) return;
        console.log("WHY")
        const data = await fetch(queryURL, { mode: 'cors' }).then(() => {
            console.log("Updated Capacity Successfully")
            getBuildings();
        });
    }

    async function getBuildings() {
        const queryURL = "https://studyspot.onrender.com/building/" + input;
        const data = await fetch(queryURL, { mode: 'cors' }).then((response) => {
            return response.json();
        })
        setData(data);
    }

    async function getAvg() {
        const queryURL = "https://studyspot.onrender.com/avg/" + input;
        const data = await fetch("https://studyspot.onrender.com/avg/" + input, { mode: 'cors' }).then((response) => {
            return response.json();
        })
        setAverage(parseInt(data));
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
                    <SearchBar setInput={setInput} setHome={() => { }} placeholder={"Enter a Study Spot..."} data={locationData} />
                </div>
            </div>

            <div>
                <p className="name">
                    {buildingData ? getName(buildingData.name) : null}
                </p>
            </div>

            <div className="locationInfoContainer">
                <div>
                    <div className='rating'>
                        <Icon className="ml-5" icon="material-symbols:star-rounded" color="yellow" width="60" height="70" inline={true} />
                        <div className='score'>{building ? null : average}</div>
                    </div>
                    <a className="location ">Location</a>
                </div>
                <div className="capacity">
                    <p >Capacity:  {buildingData ? getCapacity(buildingData.busy) : null}</p>
                    <p className="timestamp">last updated at {buildingData ? buildingData.last_updated_time : null}</p>
                    <DropButton setCapacity={setCapacity} />
                </div>
            </div>

            <div className='line'></div>


            <div className=''>
                <Modal rating={rating} setReview={setReview} setRating={setRating} />

            </div>

            <div className="cardss">
                <ul className="card_container">
                    {createCards}
                </ul>

            </div>
        </div>
    );
}

export default Spot;