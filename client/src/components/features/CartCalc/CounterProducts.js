import React from 'react';
import { ProductConsumer } from '../../../context'
import './CounterProducts.scss'


class CounterProducts extends React.Component {

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