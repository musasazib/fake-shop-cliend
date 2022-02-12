import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <div className="nav-left">
                    <div className="language">EN</div>
                    <div className="search-container">
                        <input className="search-input" type="text" />
                        <SearchIcon style={{color:"gray", fontSize: 16}} />
                    </div>
                </div>
                <div className="nav-center">
                    <h1 className="nav-logo">Fake Shop</h1>
                </div>
                <div className="nav-right">
                    <div className="menu-item">
                        REGISTER
                    </div>
                    <div className="menu-item">
                        SIGN IN
                    </div>
                    <div className="menu-item">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;