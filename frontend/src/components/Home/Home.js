import { Button, Form, Col, Row, ListGroup, Navbar, Card } from 'react-bootstrap';
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import locationData from "../../data/Data.json"
import SearchBar from '../Search/SearchBar';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CreateIcon from '@mui/icons-material/Create';
import RoomIcon from '@mui/icons-material/Room';

function Home({ setHome, setInput}) {

    return (
        <div className="home-container">
            <div className={"homeBody"}>
                <div className={"logo"}>
                    StudySpot
                </div>
                <div className={"searchBlock"}>
                    <SearchBar setHome={setHome} setInput ={setInput} placeholder={"Location name"} data={locationData}/>
                </div>
            </div>
            <div className={"footer"}>
                <ul className={"list"}>
                    <li className={"item"}>
                        <AutoStoriesIcon className={"itemIcon"}></AutoStoriesIcon>
                        Read other peoples experiences
                    </li>
                    <li className={"item"}>
                        <RoomIcon className={"itemIcon"}></RoomIcon>
                        Search to find the best rated new study spots
                    </li>
                    <li className={"item"}>
                        <CreateIcon className={"itemIcon"}></CreateIcon>
                        Write reviews about your UBC spaces
                    </li>
                </ul>
            </div>

        </div>

    );
}



export default Home;