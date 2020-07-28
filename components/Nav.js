import {useState} from 'react'
import styles from './Nav.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoSquare} from '@fortawesome/pro-solid-svg-icons'
import {faQuestionSquare} from '@fortawesome/pro-solid-svg-icons'
import {faSignIn} from '@fortawesome/pro-light-svg-icons'


function Nav(props) {
   
    return (
        <div style={props.navShow} className={styles.navContainer}>
            <div className={styles.navInfoContainer}> 
                <FontAwesomeIcon id="infoIcon" icon={faInfoSquare} width="0"/>
                <FontAwesomeIcon icon={faSignIn} width="0"/>
                <FontAwesomeIcon icon={faQuestionSquare} width="0"/>
            </div>
           <div className={styles.navSocialContainer}>
                <i className="fab fa-linkedin"></i>
                <i className="fal fa-envelope"></i>
                <i className="fab fa-instagram-square"></i>
           </div>
        </div>
    )
}

export default Nav;