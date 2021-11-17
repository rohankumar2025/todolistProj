import React from 'react'
import './style.css'
import CustomTextBox from './CustomTextBox'

function AddTextBoxButton (props) {
    return(
        <button className="plusButton" onClick={props.addTextBox}> + </button>
    )


}

export default AddTextBoxButton