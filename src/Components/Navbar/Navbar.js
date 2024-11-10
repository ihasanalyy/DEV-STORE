import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Link } from 'react-router-dom';



const Navbar = () => {
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
                        <Link to='/products/1'>Women</Link>
                    </div>
                    <div className='item'>
                        <Link to='/products/2'>Men</Link>
                    </div>
                    <div className='item'>
                        <Link to='/products/3'>Children</Link>
                    </div>
                </div>
                <div className="center">
                    <div className="logo">
                        <Link to='/'>DEV STORE</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="item">
                        <Link to='/'>HOMAPAGE</Link>
                    </div>
                    <div className="item">
                        <Link to='/'>ABOUT US</Link>
                    </div>
                    <div className="item">
                        <Link to='/'>CONTACT</Link>
                    </div>
                    <div className="item">
                        <Link to='/'>STORES</Link>
                    </div>
                </div>
            </div>
        </div>
        // <h1>Navbar</h1>
    )
}
export { Navbar }