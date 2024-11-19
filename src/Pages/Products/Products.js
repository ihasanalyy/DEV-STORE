import React from "react"
import './Products.css'

const Products = () => {
    return (
        <div className='products'>
            <div className='Productsleft'>
                <div className='filterItem'>
                    <h2>Product Categeory</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="2">Shirts</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">Slippers</label>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Filter By Price</h2>
                    <div className="inputItem">
                        <span>1000</span>
                        <input type="range" min={1000} max={50000} />
                        <span>50000</span>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value='asc' name="price" />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value='desc' name="price" />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img className="imgCat" src="https://dsuj2mkiosyd2.cloudfront.net/uploads/assets/images/000/003/140/original/am90e2_1300-auto.webp?t=1675654449"/>
            </div>
        </div>
    )
}
export { Products }