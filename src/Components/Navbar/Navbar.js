// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import React, { useState } from 'react';
// import { Cart } from '../Cart/Cart';


// const Navbar = () => {
//     const [open, setOpen] = useState(false)
//     return (
//         <div className="navbar">
//             <div className="wrapper">
//                 <div className="left">
//                     <div className='item'>
//                         <img src='Images/en.png' alt='flag' />
//                         <ExpandMoreIcon />
//                     </div>
//                     <div className='item'>
//                         <span>USD</span>
//                         <ExpandMoreIcon />
//                     </div>
//                     <div className='item'>
//                         <Link className='link' to='/products/1'>Women</Link>
//                     </div>
//                     <div className='item'>
//                         <Link className='link' to='/products/2'>Men</Link>
//                     </div>
//                     <div className='item'>
//                         <Link className='link' to='/products/3'>Children</Link>
//                     </div>
//                 </div>
//                 <div className="center">
//                     <div className="logo">
//                         <Link className='link' to='/'>DEV STORE</Link>
//                     </div>
//                 </div>
//                 <div className="right">
//                     <div className="item">
//                         <Link className='link' to='/'>HOMAPAGE</Link>
//                     </div>
//                     <div className="item">
//                         <Link className='link' to='/'>ABOUT US</Link>
//                     </div>
//                     <div className="item">
//                         <Link className='link' to='/'>CONTACT</Link>
//                     </div>
//                     <div className="item">
//                         <Link className='link' to='/'>STORES</Link>
//                     </div>
//                     <div className='icons'>
//                         <SearchIcon />
//                         <PersonOutlinedIcon />
//                         <FavoriteBorderOutlinedIcon />
//                         <div className='cartIcon' onClick={() => setOpen(!open)}>
//                             <ShoppingCartOutlinedIcon />
//                             <span>0</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {
//                 open && <Cart />
//             }
//         </div>
//         // <h1>Navbar</h1>
//     )
// }
// export { Navbar }

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useState } from 'react';
import { Cart } from '../Cart/Cart';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className='item'>
                        <img src='Images/en.png' alt='flag' />
                        <ExpandMoreIcon />
                    </div>
                    <div className='item'>
                        <span>USD</span>
                        <ExpandMoreIcon />
                    </div>
                    <div className='item'>
                        <Link className='link' to='/products/1'>Women</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/products/2'>Men</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/products/3'>Children</Link>
                    </div>
                </div>

                {/* Center section: Logo */}
                <div className="center">
                    <div className="logo">
                        <Link className='link' to='/'>DEV STORE</Link>
                    </div>
                </div>

                {/* Right section: Links and icons */}
                <div className="right">
                    <div className="item">
                        <Link className='link' to='/'>HOMEPAGE</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>ABOUT US</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>CONTACT</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>STORES</Link>
                    </div>

                    {/* Cart Icon */}
                    <div className='icons'>
                        <SearchIcon />
                        <PersonOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className='cartIcon' onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <ExpandMoreIcon />
                </div>
            </div>

            {/* Cart Component Displayed When Opened */}
            {open && <Cart />}
            
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu-items">
                    <Link className='link' to='/'>HOMEPAGE</Link>
                    <Link className='link' to='/'>ABOUT US</Link>
                    <Link className='link' to='/'>CONTACT</Link>
                    <Link className='link' to='/'>STORES</Link>
                </div>
            )}
        </div>
    );
};

export { Navbar };
