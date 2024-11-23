import React, { useState } from "react"
import './Product.css';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

const Product = () => {
    const images = [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2af15054-2598-4443-9c05-81c0c23659e2/AIR+JORDAN+1+MID+%28GS%29.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1311c1c3-b0f1-4153-96be-35f8fbcafe50/AIR+JORDAN+1+MID+%28GS%29.png",
    ];
    const [selectedImage, setSelectedImage] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1)
    return (
        <div className='product'>
            <div className='leftProduct'>
                <div className='productImage'>
                    <img src={images[0]} alt="product1" onClick={e => setSelectedImage(0)} />
                    <img src={images[1]} alt="product1" onClick={e => setSelectedImage(1)} />
                </div>
                <div className='mainImage'>
                    <img src={images[selectedImage]} alt="product1" />
                </div>
            </div>
            <div className='rightProduct'>
                <h1>Title</h1>
                <span className="price">$1.99</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="quantity">
                    <button className='' onClick={() => setProductQuantity((pre) => pre == 1 ? 1 : pre - 1)}>-</button>
                    {productQuantity}
                    <button className='' onClick={() => setProductQuantity((pre) => pre + 1)}>+</button>
                </div>
                <button className='add'>
                    <AddShoppingCartOutlinedIcon />
                    ADD TO CART
                </button>
                <div className="links">
                    <div className="linkItems">
                        <FavoriteBorderOutlinedIcon />
                        ADD TO WISHLIST
                    </div>
                    <div className="linkItems">
                        <BalanceOutlinedIcon />
                        ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}
export { Product } 