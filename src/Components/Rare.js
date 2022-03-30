import React from 'react'
import OtherProducts from './OtherProducts';

class Rare extends React.Component{
    constructor(props){
        super(props);
        this.state = {products :[]}
    }
    
    componentDidMount (){
        console.log('testing');
        fetch("http://localhost:8000/rareplants")
        .then((response)=>{
            console.log(response.status);
            //console.log(response.json());
            return response.json();
        },

        (error)=>{
            this.setState({error:error});
            console.log(error.status);
        }
        )
        .then((data)=>{
            console.log(data);
            this.setState({products:data});
        },
        
        );
    }

    render(){
    //   const {products} = this.state.products;
    //   console.log(this.state)
      const allProducts = this.state.products.map((product, index)=>{
         return(
            <OtherProducts
            key = {index}
            image ={product.image}
            product_name= {product.product_name}
            description = {product.description}
            price = {product.price}
            />
           
          );
      });
        return <>{allProducts}</>
    }
}


export default Rare
