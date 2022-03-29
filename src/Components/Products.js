import React from 'react'
import OtherProducts from './Components/OtherProducts';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {products :[]};
    }
    componentDidMount (){
        fetch("http://localhost:8000/products")
        .then(response =>{
            response.json();
        })
        .then((data)=>{
            this.setState({products:data});
        },
        (error)=>{
            this.setState({
                error
            });
        }
        );
    }
    render(){
      const {products} = this.state;
      const allProducts = products.map((product, index)=>{
          return(
              <OtherProducts
              key = {index}
              image = {product.db.image}
              product_name = {product.db.product_name}
              description = {product.db.description}
              price = {product.db.price}
              />
          );
      });
        return <>{allProducts}</>
    }
}
  
  

// class Products extends React.Component{
//   constructor(props){
//       super(props);
//       this.state = {products :[]};
//   }
//   componentDidMount (){
//       fetch("http://localhost:8000/products")
//       .then(response =>{
//           response.json();
//       })
//       .then(products=>{
//           this.setState({products});
//       })
//       .then(err=>{
//           console.log(err);
//       });
//   }
//   render(){
//       return (

//           <div className = "products">
//               {this.state.products.map(product =>(
//                   <>
//                   <img src = {product.db.image} alt = "plant"></img>
//                   <h2>{product.db.product_name}</h2>
//                   <p>{product.db.description}</p>
//                   <p>{product.db.price}</p>
//                   </>
//               ))}
//           </div>
//       )
//   }
// }
// const Products = () => {
//     return (
//         <div>
//             <section id="product-title">
//         <h1>Plants</h1>
//      </section>
//     <main className="product-container">
        
//         <div className="products">
//             <img className="proImg" src="./images/scindapsis.jpeg" alt= "scindapsis"/>
//             <h2>Scindapsis Pictus</h2>
//             <p>A pothos family trailing vine that grows well in low to medium light.</p>
//             <p>Price: $10.00</p>
//             <button className="sold-out">Sold Out</button>
//         </div>
      
//         <div className="products">
//             <img className="proImg" src="./images/monstera.jpeg" alt="Monstera Deliciosa"/>
//             <h2>Monstera Deliciosa</h2>
//             <p>The popular monstera is a fast grower that likes indirect light.</p>
//             <p>Price: $20.00</p>
//             <button className="product-button">Buy Now</button>
//         </div>

//         <div className="products">
//             <img className="proImg" src="./images/zz.jpeg" alt="ZZ Plant"/>
//             <h2>ZZ</h2>
//             <p>The ZZ is a great plant if you have low light conditions.</p>
//             <p>Price: $10.00</p>
//             <button className="product-button">Buy Now</button>
//         </div>

//         <div className="products">
//             <img className="proImg" src="./images/snake.jpeg" alt="Snake Plant"/>
//             <h2>Sansevieria</h2>
//             <p>Sansevieria also known as a snake plant does well in low light conditions.</p>
//             <p>Price: $10.00</p>
//             <button className="product-button">Buy Now</button>
//         </div>


//         <div className="products">
//             <img className="proImg" src="./images/alocasia.jpeg" alt="Alocasia"/>
//             <h2>Alocasia</h2>
//             <p>Fast grower when given bright indirect light and high humidity.</p>
//             <p>Price: $20.00</p>
//             <button className="product-button">Buy Now</button>
//         </div>


//         <div className="products">
//             <img className="proImg" src="./images/birkin.jpeg" alt="Philodendron Birkin"/>
//             <h2>Philodendron Birkin</h2>
//             <p>Part of the philodendron family the birkin grows in bright indirect light.</p>
//             <p>Price: $25.00</p>
//             <button className="product-button">Buy Now</button>
//         </div>

//         <div className="products">
//             <img className="proImg" src="./images/minimonstera.jpeg" alt="Rhaphidophora Tetrasperma"/>
//             <h2>Rhaphidophora Tetrasperma</h2>
//             <p>Also known as the mini monstera is a trailing plant that does well in medium to bright light.</p>
//             <p>Price: $15.00</p>
//             <button className="product-button">Buy Now</button>
//         </div>

//         <div className="products">
//             <img className="proImg" src="./images/moonshine.jpeg" alt="Moonshine Sansevieria"/>
//             <h2>Moonshine Sansevieria</h2>
//             <p>Part of the Sanseviera family the moonshine has light green leaves, does well in low light.</p>
//             <p>Price: $18.00</p>
//             <button class="product-button">Buy Now</button>
//         </div>

//         <div className="products">
//             <img className="proImg" src="./images/adansonii.jpeg" alt="Monstera Adansonii"/>
//             <h2>Monstera Adansonii</h2>
//             <p>A trailing vine that develops holes within the leave to make sure the bottom leaves recieve enough light.</p>
//             <p>Price: $10.00</p>
//             <button className="sold-out">Sold Out</button>
//         </div>

//         <div className="products">
//             <img className="proImg" src="./images/monsteracutting.jpeg" alt="Monstera"/>
//             <h2>Monstera Cutting</h2>
//             <p>A big leave cutting from the Monstera Deliciosa plant.</p>
//             <p>Price: $8.00</p>
//             <button className="sold-out">Sold Out</button>
//         </div>

//         <div className="products">
//             <img className="proImg" src="./images/airplant.jpeg" alt="Air Plant"/>
//             <h2>Air Plant</h2>
//             <p>An air plant that needs no soil to grow just water every 2 weeks from the bottom.</p>
//             <p>Price: $20.00</p>
//             <button className="product-button">Buy Now</button>
//         </div>

//         <div className="products">
//             <img className="proImg" src="./images/pilea.jpeg" alt="Pilea Peperomiodes"/>
//             <h2>Pilea Peperomiodes</h2>
//             <p>A plant that grows many babies that are easy to propagate, does well in medium light.</p>
//             <p>Price: $10.00</p>
//             <button className="sold-out">Sold Out</button>
//         </div>
//     </main>
//         </div>
//     )
// }

export default Products
