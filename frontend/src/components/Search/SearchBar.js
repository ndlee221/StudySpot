import React, { useState } from 'react';
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data, setInput, setHome }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    let isEmpty = wordEntered.length === 0;

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return (value.name.toLowerCase().includes(searchWord.toLowerCase()));
        });


        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };


    const setData = (name) => {
        setWordEntered(name);
    }


    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input className={isEmpty ? "roundedLeft" : ""}
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className={isEmpty ? "roundedRight searchIcon" : "searchIcon"}>
                    {filteredData.length === 0 ? (
                        <SearchIcon className={"icon"} />
                    ) : (
                        <CloseIcon className="icon" id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" className="dataItem" onClick={() => {
                                setData(value.name)
                                setInput(value.abbreviation)
                                setHome(false);
                            }} target="_blank">
                                <p className={"locationText"}  >{value.name} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;