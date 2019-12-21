import React from 'react';

import './CounterProducts.scss'

class CounterProducts extends React.Component {

    handleRemove = () => {
        const { product, removeProduct, sumPrice } = this.props;
        removeProduct(product.id);
        sumPrice();
    }

    handleMore = () => {
        const { product, more, sumPrice } = this.props;
        more(product.id);
        sumPrice();
    }

    handleLess = () => {
        const { product, less, removeProduct, sumPrice } = this.props;

        if(product.counter === 1) {
            removeProduct(product.id);
        } else {
            less(product.id);
        };
        sumPrice();
    }

    render() {

        const { product } = this.props;
        console.log("this.props w counterproducts")
        console.log(this.props)
        

        return (
            <div className='itemscount'>
                <div className='plusandminus'>
                    <button className='minus' onClick={ this.handleLess }>–</button>
                    <div className='counter'>{this.counter}</div> 
                    <button className='plus' onClick={ this.handleMore }>+</button>
                </div>
                <button className='remove' onClick={ this.handleRemove }>remove item</button>
            </div>
        );
    }
}

export default CounterProducts;