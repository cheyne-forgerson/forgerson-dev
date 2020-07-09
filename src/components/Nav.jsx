import React from 'react'

function Nav(props) {
   
    return (
        <div className={props.navContClass}>
            <div className="navInfoContainer">
                <i className="fas fa-info-square"></i>
                <i className="fal fa-sign-in"></i>
                <i className="fas fa-question-square"></i>
            </div>
           <div className="navSocialContainer">
                <i className="fab fa-linkedin"></i>
                <i className="fal fa-envelope"></i>
                <i className="fab fa-instagram-square"></i>
           </div>
        </div>
        
    )
}

export default Nav;