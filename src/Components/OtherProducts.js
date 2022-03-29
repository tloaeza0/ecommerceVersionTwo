import React from 'react'

const OtherProducts = ({
    image,
    product_name,
    description,
    price
  }) =>{
    return(
        <div className = "products">
        <img className = "ProImg" src = {image}alt ="plant"></img>
        <h2>{product_name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        </div>
    );
  };
       


export default OtherProducts;
