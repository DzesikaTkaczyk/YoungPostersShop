import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/layout.scss';

//import './CartItem.scss';
import CounterProducts from '../CartCalc/CounterProductsContainer'



const CartProduct = (props) => {
	const { product, handleRemove, handleMore, handleLess } = props;
    console.log("props w cartProduct")
    console.log(props);

    return (
        <div className='row'>
            <div className='col-xs-3 col-sm-3 col-md-2 col-lg-2'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4'>
                <div className='titleSection'>
                    <div className='title'>{product.title}</div>
                    <div>{product.author}</div>
                </div>
                <p>{product.size}cm</p>
                <p>{product.price}zł</p>

                <CounterProducts
                    product={product}
                    handleRemove={handleRemove}
                    handleMore={handleMore}
                    handleLess={handleLess}
                />
            </div>
        </div>  
    );
}

export default CartProduct