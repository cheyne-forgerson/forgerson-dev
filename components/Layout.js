import Head from 'next/head';
import Nav from '../components/Nav'; 
import Hamburger from '../components/Hamburger';
import hamStyles from '../components/Hamburger.module.css';
import {useState} from 'react'
import { faBellExclamation } from '@fortawesome/pro-solid-svg-icons';

function Layout(props) {

    //NAV
    const [openNav, setOpenNav] = useState(false);

    function navBtnClick() {
      openNav ? setOpenNav(false) : setOpenNav(true);
    }
    
    const navOpen = {
      display: "flex"
    }
    const navClosed = {
      display: "none"
    };

    return (
        <div className="layout">
            <div>
                {props.children}
            </div>
            <div style={openNav ? navOpen : navClosed}>
              <Nav />
            </div>
 
            <Hamburger 
              navIcon4={hamStyles.navIcon4}
              hamContainer={hamStyles.hamContainer}
              hamClass={openNav}
              hamClick={() => navBtnClick()}
              hamClass={openNav ? hamStyles.open : ""}
            />
        </div>
    );
}

export default Layout;