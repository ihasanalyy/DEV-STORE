import React, { useState } from "react"
import './Product.css';

const Product = () => {
    const images = [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2af15054-2598-4443-9c05-81c0c23659e2/AIR+JORDAN+1+MID+%28GS%29.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1311c1c3-b0f1-4153-96be-35f8fbcafe50/AIR+JORDAN+1+MID+%28GS%29.png",
    ];
    const [selectedImage, setSelectedImage] = useState(0);
    return (
        <div className='product'>
            <div className='leftProduct'>
                <div className='productImage'>
                    <img src={images[0]} alt="product1" onClick={e=>setSelectedImage(0)} />
                    <img src={images[1]} alt="product1" onClick={e=>setSelectedImage(1)} />
                </div>
                <div className='mainImage'>
                    <img src={images[selectedImage]} alt="product1" />
                </div>
            </div>
            <div className='rightProduct'>

            </div>
        </div>
    )
}
export { Product }