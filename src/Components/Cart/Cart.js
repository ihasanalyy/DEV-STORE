import React from "react";
import './Cart.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Cart = () => {
    const data = [
        {
            id: 1,
            title: "Product 1",
            newPrice: 10.99,
            oldPrice: 19.99,
            isNew: true,
            image2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2af15054-2598-4443-9c05-81c0c23659e2/AIR+JORDAN+1+MID+%28GS%29.png",
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1311c1c3-b0f1-4153-96be-35f8fbcafe50/AIR+JORDAN+1+MID+%28GS%29.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proidentsunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            title: "Product 2",
            newPrice: 12.99,
            oldPrice: 24.99,
            isNew: false,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6e90f28-b203-49ae-bdf7-af5a443bd0a4/WMNS+AIR+JORDAN+1+MM+LOW.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];
    return (
        <div className="cart">
            <h1>Products in your Cart</h1>
            <div className="cart-products">
                {
                    data?.map(item => (
                        <div key={item.id} className="Cartitem">
                            <img src={item.image} alt={item.title} />
                            <div className="itemDetails">
                                <h2>{item.title}</h2>
                                <p>{item.description.slice(0, 50)}...</p>
                            </div>
                            <div className="productPrice">
                                <p>Price: 1x ${item.newPrice}</p>
                            </div>
                            <DeleteOutlineOutlinedIcon className="delete" />
                        </div>
                    ))

                }
                <div className="total">
                    <span>SUB TOTAL:</span>
                    <span>$123</span>
                </div>
                <button className="checkout">
                    CHECKOUT
                </button>
                <span className="reset">
                    Reset Cart
                </span>
            </div>

        </div>
    );
}
export { Cart };
