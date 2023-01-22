import { Button, Form, Col, Row, ListGroup, Navbar, Card } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';

function Home({ setHome }) {

    return (
        <div>
             <div className="d-flex">
                <div className="d-flex ">
                    <h3 className='mt-3 mx-4 title fs-1'>
                        StudySpots
                    </h3>
                </div>
                <div className="navbar-container">
                    <div className="bar mt-4">
                    </div>
                </div>
            </div>


            <div className="body d-flex">
                <p className='fs-3 paragraph'>
                    Enter a UBC Location to get started
                </p>


                <ul className="about">
                    <li className='about-items'>
                        <p>               
                            Write reviews about your UBC spaces
                        </p>
                    </li>

                    <li className='about-items'>
                    
                        <p>
                            Search to find the best rated new study spots
                        </p>
                    </li>

                    <li className='about-items'>
                        <p>
                            Read other peoples experiences
                        </p>
                    </li>
                </ul>


            </div>


        </div>
    );
}

export default Home;