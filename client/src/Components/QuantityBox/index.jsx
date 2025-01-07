import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

const QuantityBox = ({ value, onChange }) => {

    const [inputVal, setinputVal] = useState(value);

    // Update inputVal when value prop changes
    useEffect(() => {
        setinputVal(value);
    }, [value]);

    const minus=()=>{
        if (inputVal!==1 && inputVal>0) {
            setinputVal(inputVal-1);
        }
        
    }
    const plus=()=>{
        setinputVal(inputVal+1);
    }

    return (

        <div className="quantityDrop d-flex align-items-center">
            <Button onClick={minus}><FaMinus /></Button>
            <input type="text" value={inputVal} onChange={(e) => {
                const newValue = Number(e.target.value);
                setinputVal(newValue);
                onChange(newValue); // Call onChange to update parent state
            }} />
            <Button onClick={plus}><FaPlus /></Button>
        </div>

    )
}

export default QuantityBox;