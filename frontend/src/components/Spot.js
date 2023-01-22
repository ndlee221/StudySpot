import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Spot({ setHome }) {

    const createCards =
        <Card style={{ width: '18rem' }} className="card">
            <Card.Text >test</Card.Text>
        </Card>



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

            <div className="name-container ">
                <p className="mt-5 name">
                    Building Name
                </p>
                <a className="location ">Location</a>
                <p>
                    Busy Rating:
                </p>
                <div className="card-container">
                    {createCards}
                </div>
            </div>
        </div>
    );
}

export default Spot;