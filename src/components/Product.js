import React from 'react'
import './Product.css'
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({id, title, rating, image}) {
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p>{id}</p>
            <div className="Product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p><StarRateIcon className="rateIcon"></StarRateIcon></p>

                    )) 
                }
            </div>
            </div>
            <img src={image} className="Farmer1"></img>
            <button className="toprofile">Show Profile</button>
            <button className="tocart">Show in Cart</button>
        </div>
    )
}

export default Product
