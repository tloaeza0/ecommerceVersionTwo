import React from 'react';
import Filter from './Filter';
import OtherProducts from './OtherProducts';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products :[],
            sort:" ",
            light: " ",
        };
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
                ? a.price > b.price ? 2:-2:
                sort === 'high' 
                ? a.price < b.price ? 2:-2:
                a.id > b.id ? 2 : -2
            ),
        }));
    }
    filterProducts=(event)=>{
        
        const light = event.target.value;
        //console.log(event.target.value);
        if(light === 'Low Light'){
            
                this.setState({
                light: event.target.value,
                products: this.state.products.filter((product)=> product.light.indexOf(event.target.value)>= 0),
            });
        }else if (light === 'Medium Light'){
            this.setState({
                light: event.target.value,
                products: this.state.products.filter((product)=> product.light.indexOf(event.target.value)>= 0),
            });
        }else if(light === "Bright Light"){
            this.setState({
                light: event.target.value,
                products: this.state.products.filter((product)=> product.light.indexOf(event.target.value)>= 0),
            });
        }
    };

    componentDidMount (){
        //console.log('testing');
        fetch("http://localhost:8000/plants")
        .then((response)=>{
            //console.log(response.status);
            //console.log(response.json());
            return response.json();
        },

        (error)=>{
            this.setState({error:error});
            //console.log(error.status);
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
        light={this.state.light}
        sortProducts={this.sortProducts}
        filterProducts = {this.filterProducts}
        />

        <div className = "product-container">{allProducts}</div>
        
       
        </>)
        
    }
}



export default Products
