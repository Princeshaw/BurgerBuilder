import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolBar = () =>(
    <header className="Toolbar">
        <div>MENU</div>
        <div className="Logo">
            <Logo />
        </div>
        <nav className="DesktopOnly">
        <NavigationItems />
        </nav>
    </header>
);

export default toolBar;