import React, {useState} from 'react'
import PropTypes from "prop-types";


export const AddCategory = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputchange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length > 2){
            setCategorias( cats => [inputValue, ...cats, ])
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={inputValue}
            onChange={handleInputchange}
           />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}