import React from 'react';
import { Card } from '../Card/Card';
import './List.css'


const List = () => {
    const data = [
        {
            id: 1,
            title: "Product 1",
            newPrice: 10.99,
            oldPrice: 19.99,
            isNew: true,
            image2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2af15054-2598-4443-9c05-81c0c23659e2/AIR+JORDAN+1+MID+%28GS%29.png",
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1311c1c3-b0f1-4153-96be-35f8fbcafe50/AIR+JORDAN+1+MID+%28GS%29.png",
        },
        {
            id: 2,
            title: "Product 1",
            newPrice: 10.99,
            oldPrice: 19.99,
            isNew: false,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6e90f28-b203-49ae-bdf7-af5a443bd0a4/WMNS+AIR+JORDAN+1+MM+LOW.png",
        },
        {
            id: 3,
            title: "Product 1",
            newPrice: 10.99,
            oldPrice: 19.99,
            isNew: true,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce4dcac0-caff-43da-ad2a-cbaf93d646e7/AIR+JORDAN+1+MID+%28GS%29.png",
        },
        {
            id: 4,
            title: "Product 1",
            newPrice: 10.99,
            oldPrice: 19.99,
            isNew: false,
            image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7c9aadd-242a-4dd4-8509-6ddf9645525e/AIR+JORDAN+1+RETRO+HIGH+OG.png",
        }
    ]
    return (
        <div className="list">
            <div className='listCard'>
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>

        </div>
    )
}
export { List }