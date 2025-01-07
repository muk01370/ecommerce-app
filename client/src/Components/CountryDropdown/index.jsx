import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Slide from "@mui/material/Slide";
import React, { useState, useContext, useEffect } from "react";
import { myContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountryList, setFilteredCountryList] = useState([]);
    const { countryList = [] } = useContext(myContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const selectCountry = (country) => {
        setSelectedCountry(country);
        setIsOpenModal(false);
    };

    useEffect(() => {
        if (countryList.length > 0) {
            setFilteredCountryList(countryList);
            setIsLoading(false);
        } else {
            setError('Failed to load country data');
            setIsLoading(false);
        }
    }, [countryList]);

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        if (keyword !== "") {
            const filteredList = countryList.filter((item) =>
                item?.country?.toLowerCase().includes(keyword)
            );
            setFilteredCountryList(filteredList);
        } else {
            setFilteredCountryList(countryList);
        }
    };

    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your location</span>
                    <span className="name">
                        {selectedCountry ? 
                            selectedCountry.country.length > 10 ? 
                                `${selectedCountry.country.substring(0, 10)}...` : 
                                selectedCountry.country 
                            : "Select Location"}
                    </span>
                </div>
                <span className="ml-auto">
                    <FaAngleDown />
                </span>
            </Button>

            <Dialog
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                className="locationModal"
                TransitionComponent={Transition}
            >
                <div className="modalHeader">
                    <h5>Choose Your Delivery Location</h5>
                    <p>Enter your address and we will specify the offer for your area.</p>
                    <Button className="close_" onClick={() => setIsOpenModal(false)}>
                        <MdClose />
                    </Button>
                </div>

                <div className="headerSearch w-100">
                    <input
                        type="text"
                        placeholder="Search your area..."
                        onChange={filterList}
                    />
                    <Button>
                        <IoSearchOutline />
                    </Button>
                </div>

                <ul className="countryList mt-3">
                    {isLoading ? (
                        <li>Loading countries...</li>
                    ) : error ? (
                        <li>{error}</li>
                    ) : filteredCountryList?.length > 0 ? (
                        filteredCountryList.map((item, index) => (
                            <li key={index}>
                                <Button
                                    onClick={() => selectCountry(item)}
                                    className={`${selectedCountry?.country === item.country ? "active" : ""}`}
                                >
                                    {item.country}
                                </Button>
                            </li>
                        ))
                    ) : (
                        <li>No countries found</li>
                    )}
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDropdown;
