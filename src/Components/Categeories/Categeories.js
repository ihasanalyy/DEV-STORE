import React from 'react';
import './Categeories.css';
import { Link } from 'react-router-dom';

const Categeories = () => {
    return (
        <div className="categories">
            <div className='col'>
                <div className='row'>
                    <img src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/72e04774-a2fa-4379-b65a-6b291b47947f/M+J+AIR+JDN+85+SS+TEE.png' />
                    <button><Link className='link' to={'/products/1'}>Men</Link></button>
                </div>
                <div className='row'>
                    <img src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67fbae75-7139-4469-87e2-be6e80fefb62/W+NSW+TREND+WVN+MR+PANT.png' />
                    <button><Link className='link' to={'/products/1'}>Women</Link></button>
                </div>
            </div>
            <div className='col'>
                <div className='row'>
                    <img src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d1c0cf7-6c11-452c-a7b9-e4d4384a6894/K+NK+COB+BOMBER+JKT.png' />
                    <button><Link className='link' to={'/products/1'}>Kids</Link></button>
                </div>
            </div>
            <div className='col col-l'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <img src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3da78d5e-87c5-45b3-b95a-b721c8dc77cf/W+ACG+TFADV+PRMLFT+RPE+DPE+JKT.png'/>
                            <button><Link className='link' to={'/products/1'}>Sale</Link></button>
                        </div>

                    </div>
                    <div className='col'>
                        <div className='row'>
                            <img src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d588590f-5909-4657-8350-e739ba4a84ee/NIKE+DUNK+LOW+RETRO.png' />
                            <button><Link className='link' to={'/products/1'}>Feature</Link></button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <img src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/156a6739-dbd4-44dc-9561-443fe02851c2/CHI+MNK+CLUB+HDY+PO+CE.png' />
                    <button><Link className='link' to={'/products/1'}>New Arrival</Link></button>
                </div>
            </div>
        </div>
    )
}

export { Categeories }