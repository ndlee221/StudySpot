import React, { useState } from "react";
import "./Modal.css";
import { Button, FormGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';



export default function Modal({ rating, setRating, setReview }) {
  const [reviewModal, setModal] = useState(false);
  const [input, setInput] = useState("");

  const toggleModal = () => {
    setModal(!reviewModal);
  };

  function handleSubmit(event) {
    event.preventDefault()
      setModal(false);
      if (input != "") { setReview(input); }
    
  }

  if (reviewModal) {
    document.body.classList.add('active-reviewModal')
  } else {
    document.body.classList.remove('active-reviewModal')
  }

  return (

    <>
      <Button onClick={toggleModal} className="btn-reviewModal" variant="light"> Add a review </Button>

      {reviewModal && (
        <div className="reviewModal">
          <div onClick={toggleModal} className="overlay"></div>
          <Form onSubmit={handleSubmit} action="#">
            <FormGroup className="reviewModal-content d-flex flex-column align-items-center">
              <Form.Label> Add a review </Form.Label>
              <Form.Control className="input" onChange={event => setInput(event.target.value)} type="input" placeholder="What did you think.." />
              <Form.Label> Rate your experience </Form.Label>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <div className="d-flex flex-row align-item-center mt-4">
                <Button className="mx-3" variant="light"> Close </Button>
                <Button className="mx-3" variant="light" type="submit"> Submit </Button>
              </div>
            </FormGroup>

          </Form>



        </div>
      )}
    </>
  );
}