import React from 'react';
import { PropTypes } from 'prop-types';

import CartProduct from './CartProduct';
import Discount from '../CartCalc/CounterProductsContainer'
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import '../../../styles/layout.scss';
import './Cart.scss';

class Cart extends React.Component {

  AddDiscount = () => {
    const { addDiscountCode, sumPrice } = this.props;
    addDiscountCode();
    sumPrice();
  }
  
  render() {
    const { cart, price, discountStatus, request } = this.props;
    const pending = request.pending;
    const success = request.success;
    const error = request.error;

    return (
      <div>
        {(pending === true || success === null) && <Spinner />}
        {pending === false && success === true && cart.length > 0 && (
          cart.map(product => (
            <div>
              <CartProduct 
                products={product}
                key={product.id}
                handleRemove={this.handleRemove}
              />
            </div>
          ))
        )}
        {pending === false && error !== null  && <Alert variant='error'>Connect error</Alert>}
        {pending === false && success === true && cart.length === 0 && <Alert variant='info'> Choose something nice :) </Alert>}
        {pending === false && 
          <div className='priceSection'>
            <Discount
              discountStatus={discountStatus}
              AddDiscount={this.AddDiscount}
            />
            <p>Total: {price}zł</p>

            <div className='CartModal'></div>
            <div className='buttonPosition'><button className='pay'>Go pay</button></div>
          </div>
        }
      </div>
    )
  }
};


export default Cart;