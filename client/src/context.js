//import React from 'react';
import React, { Component } from 'react'
import { CartData } from './CartData'

const ProductContext = React.createContext();
//provider

//consumer

class ProductProvider extends Component {
	state = {
		products: CartData,
		cost: 0
	}

	getItem = (id) => {
	    const product = this.state.products.find(item => item.id == id);
	    return product;
	}

	addToCart = (id) => {
		let tempProducts = [...this.state.products];
		const product = this.getItem(id);
		const index = tempProducts.indexOf(product);
		product.counter += 1;
		this.setState(()=>{
			return {products:tempProducts}
			},
 			()=>{
				this.sumPrice();
				console.log(this.state.products)
			})
	}

	less = (id) => {
		let tempProducts = [...this.state.products];
		const product = this.getItem(id);
		const index = tempProducts.indexOf(product);
		product.counter -= 1;
		this.setState(()=>{
			return {products:tempProducts}
			},
 			()=>{
				this.sumPrice();
				console.log(this.state.products)
			})
	}

	remove = (id) => {
		let tempProducts = [...this.state.products];
		const product = this.getItem(id);
		const index = tempProducts.indexOf(product);
		product.counter = 0;
		this.setState(()=>{
			return {products:tempProducts}
			},
 			()=>{
				this.sumPrice();
				console.log(this.state.products)
			})
	}

	sumPrice = () => {
		let sumPrices = 0;
		this.state.products.map(product => (sumPrices += (product.counter * product.price)))
		this.setState(()=>{
	        return {
	          cost: sumPrices
	        }
	    })
	}

	buy = () => {
		this.state.products.map(product => ( product.counter = 0 ))
		this.setState(()=>{
	        return {
	          products: this.state.products,
	          cost: 0

	        }
	    })
	}

	render() {
		return (
			<ProductContext.Provider value ={{
				...this.state,
				handleDetail:this.handleDetail,
				addToCart:this.addToCart,
				less:this.less,
				remove:this.remove,
				sumPrice:this.sumPrice,
				buy:this.buy
			}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};