import React from 'react';
import './Contact.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () =>{
    return(
        <div className="contact">
            <div className='wrapper'>
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type='text' placeholder='Enter your email'/>
                    <button>JOIN US</button>
                </div>
                <div className='Contacticons'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <XIcon />
                    <GoogleIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>
    )
}
export {Contact}