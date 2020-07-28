import React from 'react';


function Hamburger(props) {

    return (
        <div className={props.hamContainer}>
            <div className={props.hamClass} onClick={props.hamClick} id={props.navIcon4}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div> 
    )
}    

export default Hamburger;