import { Button, Form, Col, Row, ListGroup, Navbar, Card } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import locationData from "./Data.json"
import SearchBar from "./SearchBar";

function Home({ setHome }) {

    return (

        <div>
            <div className={"header"}>

            </div>
        </div>


        // <div>
        //      <div className="d-flex">
        //         <div className="d-flex ">
        //             <h3 className='mt-3 mx-4 title fs-1'>
        //                 <div className='centered-images'>
        //                     <h1 className='titleStudy'>Study</h1>
        //                     <h1 className='titleSpot'>Spots</h1>
        //                 </div>
        //             </h3>
        //         </div>
        //     </div>
        //
        //
        //     <div className="body d-flex threeSection">
        //         <p className='fs-3 paragraph'>
        //             Enter a UBC Location to get started
        //         </p>
        //         <div className={"searchContainer"}>
        //             <SearchBar placeholder="Enter a Study Spot..." data={locationData} />
        //         </div>
        //
        //
        //         <ul className="about">
        //             <li className='about-items'>
        //                 <p>
        //                     Write reviews about your UBC spaces
        //                 </p>
        //             </li>
        //
        //             <li className='about-items'>
        //                 <p>
        //                     Search to find the best rated new study spots
        //                 </p>
        //             </li>
        //
        //             <li className='about-items'>
        //                 <p>
        //                     Read other peoples experiences
        //                 </p>
        //             </li>
        //         </ul>
        //
        //
        //     </div>
        //
        //
        // </div>
    );
}



export default Home;