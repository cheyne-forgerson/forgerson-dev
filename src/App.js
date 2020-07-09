import React, {useState} from 'react';
import './App.css';

//Components
import Hello from './components/Hello';
import Card from './components/Card';
import Hamburger from './components/Hamburger';
import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';

function App() {

  const [displayHello, setDisplayHello] = useState(true)
  const [btnClass, setBtnClass] = useState("button")
  const [helloClasses, setHelloClasses] = useState("")
  const [displayEnter, setDisplayEnter] = useState(false)
  const [helloBtnClasses, setHelloBtnClasses] = useState("fad fa-portal-enter")
  const [cardClasses, setCardClasses] = useState("card fadeout")

  const [mainHeaderClasses, setMainHeaderClasses] = useState("mainHeader fadeout")

  //NAV HAMBURGER
  const [toggleHamClass, setHamClass] = useState(false);

  //NAV
  const [displayNav, setDisplayNav] = useState("");
  const [navClass, setNavClass] = useState("navContainer fadeout");

  //CONTENT
  const [contentClass, setContentClass] = useState("fadeout");

  function toggleNav() {
    if (toggleHamClass === true) {
      setHamClass(false);
      setNavClass("navContainer fadeout")
      setTimeout(() => {
        setDisplayNav(false);
      }, 750);
    } else {
      setHamClass(true);
      setDisplayNav(true);
      setTimeout(() => {
        setNavClass("navContainer fadein");
      }, 10)
    }
  }

  const enterStyle = {
    display: "flex",
    justifyContent: "center"
  }
      
  const helloTimeout = () => {
    setHelloBtnClasses("fad fa-portal-exit fadeout");
    setBtnClass("button fadeout");
    setHelloClasses("fadeout");
    setDisplayEnter(true);
    setTimeout(() => {
      setDisplayHello(false)
      setMainHeaderClasses("mainHeader fadein");
    }, 500);
    setTimeout (() => {
      setCardClasses("card fadein");
    }, 750)
    setTimeout (() => {
      setCardClasses("card fadein");
      setContentClass("fadein");
    }, 1000)
  };

  function returnHello() {
    return (
      <Hello
        helloClass={helloClasses}
        btnClasses={btnClass}
        helloBtnClass={helloBtnClasses}
        btnOnClick={helloTimeout}
      />
    )
  }

  function returnMainHeader() {
    return (
      <Header 
        header={mainHeaderClasses}
        headerName="headerName"
        headerTitle="headerTitle"
        name="forgerson"
        title=".DEV" />)
  }

  function returnEnter() {
    return (
      <div style={enterStyle}>
        <Card 
          cardClass={cardClasses}
          cardName="Cheyne Forgerson"
          cardTitle="Web Developer"
          avatarImgSrc={require("./images/cheyneForgerson_img.jpeg")}
          avatarImgClass="avatarImg"
          avatarImgContainerClass="avatarContainer"
          cardTextClass="cardText"
          cardNameClass="cardName"
          cardTitleClass="cardTitle"
        />
      </div>
    )
  }

  function returnNav() {
    return (
      <Nav 
        navContClass={navClass}
      />
    )
  }

  function returnContent() {
    return (
      <Content 
      contentClass={contentClass}
      contentTitleClass="contentTitle"
      iconClass="fas fa-info-square"
      title="Hello,"
      text="I'm Web Developer based in Southern California. 
      My focus is on beautiful, responsive web design with a mobile first approach. 
      Feel free to reach out, I'd love to get to know you."
    />
    )
  }

  return (
    <div className="App">
      {displayEnter ? returnMainHeader(): ""}
      {displayNav ? returnNav() : ""}
      {displayHello ? returnHello() : ""}
      {displayEnter ? returnEnter() : ""}
      {displayEnter ? returnContent() : ""}
      <div className="hamContainer">
        <Hamburger
        hamClass={toggleHamClass ? "open" : ""}
        hamClick={toggleNav}/>
      </div>
    </div>
  );
}

export default App;
