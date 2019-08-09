import React from 'react';
import Logo from './../Assets/Logo.png'
import './Header.css'

const Header = () => (
    <header className='header'>
        <div className='Logo'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='name-and-options'>
            <div className='spreasheet-name'>Untiled Spreadsheet</div>
            <div className='options'>
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Insert</span>
                <span>Format</span>
                <span>Data</span>
                <span>Tools</span>  
                <span>Add-ons</span>
                <span>Help</span>
            </div>
        </div>
    </header>
)

export default Header