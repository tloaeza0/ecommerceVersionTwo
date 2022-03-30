import React from 'react'
import OtherProducts from './OtherProducts';
import Filter from './Filter';

class Rare extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products :[],
            sort :" ",
        }
    }
    sortProducts=(event)=>{
        const sort = event.target.value;
        console.log(event.target.value);
        this.setState(state=>({
            sort: sort,
            products: this.state.products
            .slice()
            .sort((a,b)=>
                sort ==='low'
                ? a.price > b.price ? 1:-1:
                sort === 'high' 
                ? a.price < b.price ? 1:-1:
                a.id > b.id ? 1 : -1
            ),
        }));
    };
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

      return( 
        <>
        <Filter count = {this.state.products.length}
        sort={this.state.sort}
        sortProducts={this.sortProducts}
        />

        
        <div className = "product-container">{allProducts}</div>

       
        </>)
        
        }
}


export default Rare
