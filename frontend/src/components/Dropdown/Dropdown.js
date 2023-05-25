import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./Dropdown.css";

function DropButton({ setCapacity }) {

    return (
        <DropdownButton variant="light" id="dropdown-basic-button" title="Availability">
            <Dropdown.Item href="#/action-1" onClick={() => {
                setCapacity(1)
            }}>Not very crowded</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={() => {
                setCapacity(2)
            }}>Slightly crowded</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={() => {
                setCapacity(3)
            }}>Crowded</Dropdown.Item>
        </DropdownButton>
    );
}

export default DropButton;