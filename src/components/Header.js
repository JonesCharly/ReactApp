import React from 'react';
import logo from '../logo.svg';
import "./Header.css";

const Header = ({name, city}) => {
    
    return (
        <header className="header-header">
            <img src={logo} className="header-logo" alt="logo" />
            <p>Welcome {name} </p>
      </header>
    )
}

export default Header