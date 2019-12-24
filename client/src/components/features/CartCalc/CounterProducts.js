import React from 'react';
import {ProductConsumer} from '../../../context'
import './CounterProducts.scss'


class CounterProducts extends React.Component {

    /*handleRemove = () => {
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
    }*/

    render() {

        const { product } = this.props;
        
        
        return (
            <div className='itemscount'>
                <div className='plusandminus'>                   
                    <ProductConsumer>
                        {value => {return <button className='minus' onClick={()=> {value.less(product.id)}}>–</button>}}
                    </ProductConsumer>
                    <div className='counter'>{product.counter}</div> 
                    <ProductConsumer>
                        {value => {return <button className='plus' onClick={()=> {value.addToCart(product.id)}}>+</button>}}
                    </ProductConsumer>
                </div>            
                <ProductConsumer>
                    {value => {return <button className='remove' onClick={()=> {value.remove(product.id)}}>remove item</button>}}
                </ProductConsumer>
            </div>
        );
    }
}

export default CounterProducts;