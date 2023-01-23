import { Button, Form, Col, Row, ListGroup, Navbar, Card } from 'react-bootstrap';
import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import locationData from "./Data.json"
import SearchBar from "./SearchBar";

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

        </div>

    );
}



export default Home;