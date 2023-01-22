import { Button, Form, Col, Row, ListGroup, Navbar, Card } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import locationData from "./Data.json"
import SearchBar from "./SearchBar";
import background from "../images/UBC-Vancouver-campus-2.jpg"

function Home({ setHome }) {

    return (
        <div>
            <div className={"header"}>
                <div className='centered-images'>
                    <h1 className='titleStudy'>Study</h1>
                    <h1 className='titleSpot'>Spots</h1>
                </div>

            </div>

        </div>

    );
}



export default Home;