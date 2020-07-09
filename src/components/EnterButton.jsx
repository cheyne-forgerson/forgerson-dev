import React from 'react';

function EnterButton(props) {

    return (
        <button 
        type="button" 
        style={props.btnStyle}   
        className={props.btnClasses}>
            <i 
            className={props.enterClass}
            style={props.enterStyle}
            onMouseEnter={props.btnOnHover} 
            onMouseOut={props.btnOffHover}
            onClick={props.btnOnClick} >
            </i>
        </button>
    );
}

export default EnterButton;