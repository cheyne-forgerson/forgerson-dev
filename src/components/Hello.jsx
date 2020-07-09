import React, {useState} from 'react';

import Header from './Header';
import EnterButton from './EnterButton';

function Hello(props) {
    //Header
    const [nameHover, setNameHover] = useState(false)
    const [titleHover, setTitleHover] = useState(false)

    const nameStyles = {
        transform: nameHover ? "translateX(-20vmin)" : "",
        transition: "transform 750ms, opacity 1000ms",
        opacity: nameHover ? "0" : "1"
    }

    const titleStyles = {
        transform: titleHover ? "translateX(20vmin)" : "",
        transition: "transform 750ms, opacity 1000ms",
        opacity: titleHover ? "0" : "1"
    }

    function onHeaderHover() {
        setNameHover(true);
        setTitleHover(true)
    }



    //Button
    const [btnHover, setBtnHover] = useState(false)
    


       
    const btnStyles = {
        backgroundColor: btnHover ? "#aacfd0" : "#f4f7f7",
        color: btnHover ? "#f4f7f7" : "",
        opacity: nameHover ? "1" : "0",
        transition: "opacity 1000ms"
    }

    const enterStyles = {
        backgroundColor: btnHover ? "#aacfd0" : "#f4f7f7",
    }
  
    function onBtnHover() {
        setBtnHover(true)
    }

    function offBtnHover() {
        setBtnHover(false)
    }


    return (
        <div className={props.helloClass}>
            <Header
                header="header"
                headerName="header-name"
                headerTitle="header-title"
                name="forgerson"
                title=".DEV"
                nameStyle={nameStyles}
                titleStyle={titleStyles}
                headerHover={onHeaderHover} />
            <EnterButton 
                btnStyle={btnStyles}
                btnClasses={props.btnClasses}
                btnOnClick={props.btnOnClick}
                btnOnHover={onBtnHover}
                btnOffHover={offBtnHover}
                enterClass={props.helloBtnClass}
                enterStyle={enterStyles}/>
        </div>
    )
}

export default Hello;