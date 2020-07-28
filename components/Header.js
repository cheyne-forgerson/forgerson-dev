import React from 'react';

function Header(props) {
   
    return (
        <div 
        onMouseOver={props.headerHover}
        className={props.header}
        >
            <h1 
            className={props.headerName}
            style={props.nameStyle}>
                {props.name}
            </h1>
            <h1 className={props.headerTitle}
            style={props.titleStyle}>
                {props.title}
            </h1>
        </div>
    );
}

export default Header;