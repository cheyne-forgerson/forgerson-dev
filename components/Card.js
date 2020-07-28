import React from 'react'

function Card(props) {
   
    return (
        <div>
            <div style={{height: "10vmin"}}></div>
            <div style={props.cardStyle} className={props.cardClass}>
                <div className={props.avatarImgContainerClass}>
                    <img className={props.avatarImgClass} src={props.avatarImgSrc} alt="avatar"/>
                </div>
                <div className={props.cardTextClass}>
                    <h3 className={props.cardNameClass}>{props.cardName}</h3>
                    <p className={props.cardTitleClass}>{props.cardTitle}</p> 
                </div>
            </div>
        </div>
        
    )
}

export default Card;