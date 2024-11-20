import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

const Card = ({ item }) => {
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={item.image} alt={item.title} className="firstImg" />
                    {item.isNew ? (
                        <img src={item.image2} alt={item.title} className="secondImg" />
                    ) : (<img src={item.image} alt={item.title} className="firstImg" />)}
                </div>
                <h2>{item.title}</h2>
                <div className="price">
                    {item.oldPrice && <h3 className="old-price">{item.oldPrice}</h3>}
                    {item.newPrice && <h3 className="new-price">{item.newPrice}</h3>}
                    {item.normalPrice && <h3 className="normal-price">{item.normalPrice}</h3>}
                </div>
            </div>
        </Link>
    );
};

export { Card };
