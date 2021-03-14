import React from 'react';
import './Logo.css';
import burgerLogo from '../../assets/Images/burger-logo.png';

const logo = (props) => (
    <div className="Logo"> 
        <img src={burgerLogo} alt="The Burger" />
    </div>
);

export default logo;