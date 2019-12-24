import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import CartProduct from './CartProduct';
import Discount from '../CartCalc/CounterProducts'
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import '../../../styles/layout.scss';
import './Cart.scss';
import {ProductConsumer} from '../../../context'

class Cart extends React.Component {
  
  render() {
    return (
      <div>
        <ProductConsumer>
        {value => {if(value.cost > 0){
          return(
            <div className='priceSection'>
              <h1>Your posters</h1>
              <ProductConsumer>
                {value =>{
                  return value.products.map( product => { 
                    if(product.counter > 0)
                      {return (<CartProduct key={product.id} product={product}/>)}
                  })
                }}
              </ProductConsumer>
              <ProductConsumer>
                {value =>{
                  return (<p>Total: {value.cost}zł</p>)  
                }}
              </ProductConsumer>

              <div className='CartModal'></div>
              <div className='buttonPosition'>
                <ProductConsumer>
                {value => { return(
                    <button className='pay' onClick={()=>{value.buy()}}>Buy</button>)
                  }
                }
                </ProductConsumer>
              </div>
          </div>)
          } else {
            return ( <Alert>Your cart is empty. <br/>Pick something nice from our shop :)</Alert>)
          }
        }}
        </ProductConsumer>
      </div>
    )
  }
};


export default Cart;