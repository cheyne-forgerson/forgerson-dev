import React from 'react';

function Hamburger(props) {

    return (
        <div onClick={props.hamClick} className={props.hamClass} id="nav-icon4">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}    

export default Hamburger;