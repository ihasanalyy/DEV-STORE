// import React, { useState } from "react"
// import './Product.css';
// import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
// import { useParams,Link } from "react-router-dom";
// import { useFetch } from "../../Components/hooks/hooks";

// const Product = () => {
//     const {id} = useParams();
//     console.log(id)
//     const [selectedImage, setSelectedImage] = useState(0);
//     const [productQuantity, setProductQuantity] = useState(1)

//     const { data, loading, error } = useFetch(`https://api.escuelajs.co/api/v1/products/${id}`)
//     console.log(data)
//     const response = data
//     const {images} = response
//     console.log(images)

//     return (
        
//             <div className='product'>
//                 <div className='leftProduct'>
//                     <div className='productImage'>
//                         <img src={images[0]} alt="product1" onClick={e => setSelectedImage(0)} />
//                         <img src={images[1]} alt="product1" onClick={e => setSelectedImage(1)} />
//                     </div>
//                     <div className='mainImage'>
//                         <img src={images[selectedImage]} alt="product1" />
//                         {/* <img src={response?.image} alt="product1" /> */}
//                     </div>
//                 </div>
//                 <div className='rightProduct'>
//                     <h1>{response?.title}</h1>
//                     <span className="price">${response?.price}</span>
//                     <p>{response?.description}</p>
//                     <div className="quantity">
//                         <button className='' onClick={() => setProductQuantity((pre) => pre == 1 ? 1 : pre - 1)}>-</button>
//                         {productQuantity}
//                         <button className='' onClick={() => setProductQuantity((pre) => pre + 1)}>+</button>
//                     </div>
//                     <button className='add'>
//                         <AddShoppingCartOutlinedIcon />
//                         ADD TO CART
//                     </button>
//                     <div className="links">
//                         <div className="linkItems">
//                             <FavoriteBorderOutlinedIcon />
//                             ADD TO WISHLIST
//                         </div>
//                         <div className="linkItems">
//                             <BalanceOutlinedIcon />
//                             ADD TO COMPARE
//                         </div>
//                     </div>
//                     <div className="info">
//                         <span>Vendor: Polo</span>
//                         <span>Product Type: T-Shirt</span>
//                         <span>Tag: T-Shirt, Women, Top</span>
//                     </div>
//                     <hr />
//                     <div className="info">
//                         <span>DESCRIPTION</span>
//                         <hr />
//                         <span>ADDITIONAL INFORMATION</span>
//                         <hr />
//                         <span>FAQ</span>
//                     </div>
//                 </div>
//             </div>
        
//     )
// }
// export { Product } 


import React, { useState } from "react";
import './Product.css';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../Components/hooks/hooks";

const Product = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [productQuantity, setProductQuantity] = useState(1);

    const { data, loading, error } = useFetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading product.</div>;
    
    const response = data || {};
    const images = response.images || [];
    
    return (
        <div className='product'>
            <div className='leftProduct'>
                <div className='productImage'>
                    {images[0] && (
                        <img src={images[0]} alt="product1" onClick={() => setSelectedImage(0)} />
                    )}
                    {images[1] && (
                        <img src={images[1]} alt="product2" onClick={() => setSelectedImage(1)} />
                    )}
                </div>
                <div className='mainImage'>
                    {images[selectedImage] && (
                        <img src={images[selectedImage]} alt={`product${selectedImage + 1}`} />
                    )}
                </div>
            </div>
            <div className='rightProduct'>
                <h1>{response?.title || "Product Title"}</h1>
                <span className="price">${response?.price || "0.00"}</span>
                <p>{response?.description || "No description available."}</p>
                <div className="quantity">
                    <button onClick={() => setProductQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                    {productQuantity}
                    <button onClick={() => setProductQuantity((prev) => prev + 1)}>+</button>
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
    );
};

export { Product };
