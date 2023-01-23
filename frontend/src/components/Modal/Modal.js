import React, { useState } from "react";
import "./Modal.css";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


export default function Modal() {
  const [reviewModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!reviewModal);
  };

  if(reviewModal) {
    document.body.classList.add('active-reviewModal')
  } else {
    document.body.classList.remove('active-reviewModal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-reviewModal">
        Add a review
      </button>

      {reviewModal && (
        <div className="reviewModal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="reviewModal-content"> 
            <Form.Label> Add a review</Form.Label>       
            <Form.Control className="textBox" type="text" placeholder="Write your review"/>
            <label className="sliderLabel" for="range1" class="form-label">Select a rating</label>
            <input className="slider" type="range" class="form-range" min="0" max="4" id="range1"/>
            <Button className="close-reviewModal" variant="light" onClick={toggleModal}> Close </Button>
            <Button className="submit-reviewModal" variant="light" onClick={toggleModal}> Submit </Button>
          </div>
        </div>
      )}
    </>
  );
}