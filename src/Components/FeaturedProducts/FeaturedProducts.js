import React, { useEffect } from 'react'
import { useState } from 'react';
import './FeaturedProducts.css'
import { Card } from '../Card/Card.js';
import { useFetch } from '../hooks/hooks.js';


const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products')

    return (
        <div className="FeaturedProducts">
            <div className='top'>
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
            </div>
            <div className='bottom'>
                {error ? (
                    <div>Sorry, something went wrong</div>
                ) : loading ? (
                    <div>LOADING</div>
                ) : (
                    data?.slice(0, 5).map((item) => <Card item={item} key={item.id} />)
                )}

            </div>
        </div>
    )
}

export { FeaturedProducts }