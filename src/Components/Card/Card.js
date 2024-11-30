// import React from "react";
// import { Link } from "react-router-dom";
// import './Card.css';

// const Card = ({ item }) => {
//     return (
//         <Link className="link" to={`/product/${item.id}`}>
//             <div className="card">
//                 <div className="image">
//                     {item.isNew && <span>New Season</span>}
//                     <img src={item.image} alt={item.title} className="firstImg" />
//                     {item.isNew ? (
//                         <img src={item.images[0]} alt={item.title} className="secondImg" />
//                     ) : (<img src={item.images[1]} alt={item.title} className="firstImg" />)}
//                 </div>
//                 <h2>{item.title}</h2>
//                 <div className="price">
//                     {/* {item.oldPrice && <h3 className="old-price">{100}</h3>}
//                     {item.newPrice && <h3 className="new-price">{100}</h3>} */}
//                     {item.price && <h3 className="normal-price">${item.price}</h3>}
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export { Card };

import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

const Card = ({ item }) => {
    if (!item) {
        console.warn("Card received invalid item:", item);
        return null;
    }

    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={item.images[1]} alt={item.title} className="firstImg" />
                    {item.images && Array.isArray(item.images) && item.images.length > 1 ? (
                        <img src={item.images[0]} alt={item.title} className="secondImg" />
                    ) : (
                        <img src={item.image} alt={item.title} className="firstImg" />
                    )}
                </div>
                <h2>{item.title.slice(0,20) || "Untitled Product"}</h2>
                <div className="price">
                    {item.price ? (
                        <h3 className="normal-price">${item.price}</h3>
                    ) : (
                        <h3 className="normal-price">Price unavailable</h3>
                    )}
                </div>
            </div>
        </Link>
    );
};

export { Card };

