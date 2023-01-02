import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import GithubIcon from "@material-ui/icons/GitHub";
import logo from './assets/logo.png';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>


    <nav className="logo">
      <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }}/>
       
      </nav>
 
 
 
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>


      
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/Blog"> Blog </Link>
        <Link to="/Contact"> Contact </Link>
         <a className="giticon" href="#"><GithubIcon /> </a>
        
      </div>
    </div>
  );
}

export default Navbar;
