import { Button, Form, Col, Row, ListGroup, Navbar, Card } from 'react-bootstrap';
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import locationData from "./Data.json"
import SearchBar from "./SearchBar"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CreateIcon from '@mui/icons-material/Create';
import RoomIcon from '@mui/icons-material/Room';

function Home({ setHome }) {

    return (
        <div>
            <div className={"homeBody"}>
                <div className={"logo"}>
                    StudySpot
                </div>
                <div className={"searchBlock"}>
                    <SearchBar placeholder={"Location name"} data={locationData}/>
                </div>
            </div>
            <div className={"footer"}>
                <ul className={"list"}>
                    <li className={"item"}>
                        Read other peoples experiences
                        <AutoStoriesIcon></AutoStoriesIcon>
                    </li>
                    <li className={"item"}>
                        Search to find the best rated new study spots
                        <RoomIcon></RoomIcon>
                    </li>
                    <li className={"item"}>
                        Write reviews about your UBC spaces
                        <CreateIcon></CreateIcon>
                    </li>
                </ul>
            </div>

        </div>

    );
}



export default Home;