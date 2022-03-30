import React from 'react';
//import Grid from '@react-css/grid';
const OtherProducts = ({
    image,
    product_name,
    description,
    price
  }) =>{
    return(
      // <div>
      //   <section id="product-title">
      //     <h1>Plants</h1>
      //   </section>
      
      <main className="product-container">
        
        <div className = "products">
        
        <img className = "proImg" src = {image}alt ="plant"></img>
        <h2>{product_name}</h2>
        <p>{description}</p>
        <p>${price} USD</p>
        <button className="product-button">Buy Now</button>
        </div>
       
      </main>
        
        // </div>
    );
  };
       


export default OtherProducts;
