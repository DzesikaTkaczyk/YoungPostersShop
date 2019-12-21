
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/layout.scss';

//import './CartItem.scss';
import CounterProducts from '../CartCalc/CounterProductsContainer'



const CartProduct = (props) => {
	const { products, handleRemove, handleMore, handleLess } = props;
    console.log("props w cartProduct")
    console.log(props);

    return (
        <div className='row'>
            <div className='col-xs-3 col-sm-3 col-md-2 col-lg-2'>
                <img src={products.image} alt={products.title} />
            </div>
            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4'>
                <div className='titleSection'>
                    <div className='title'>{products.title}</div>
                    <div>{products.author}</div>
                </div>
                <p>{products.size}cm</p>
                <p>{products.price}zł</p>

                <CounterProducts
                    products={products}
                    handleRemove={handleRemove}
                    handleMore={handleMore}
                    handleLess={handleLess}
                />
            </div>
        </div>  
    );
}

export default CartProduct