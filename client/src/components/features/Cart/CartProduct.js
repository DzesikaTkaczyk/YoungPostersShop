import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/layout.scss';

import './CartProducts.scss';
import CounterProducts from '../CartCalc/CounterProducts'



const CartProduct = (props) => {
	const { product } = props;

    return (
        <div className='row'>
            <div className='col-xs-3 col-sm-2 col-md-2 col-lg-2'>
                <div className='cartImg'>
                	<img src={product.image} alt={product.title} />
                </div>
            </div>
            <div className=' col-xs-9 col-offset-sm-1 col-sm-9 col-offset-sd-1 col-md-9 col-offset-lg-1 col-lg-9'>
            	<div className='description'>
	                <div className='titleSection'>
	                    <div className='title'>{product.title}</div>
	                    <div className='author'>{product.author}</div>
	                </div>
	                <div className='details'>
		                <p className='size'>{product.size}cm</p>
		                <p className='price'>{product.price}zł</p>

		                <CounterProducts
		                	className='counterProducts'
		                    product={product}
		                />
		            </div>
	            </div>
            </div>
        </div>  
    );
}

export default CartProduct