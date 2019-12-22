import React from 'react';
import { PropTypes } from 'prop-types';

import CartProduct from './CartProduct';
import Discount from '../CartCalc/CounterProductsContainer'
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import '../../../styles/layout.scss';
import './Cart.scss';

class Cart extends React.Component {


  componentDidMount() {
    const { loadCart, cart } = this.props;
console.log("this.props w cart.js component did mount")
console.log(this.props)
console.log(cart)

    loadCart()
  }

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
    
    //PUSTE, PROBLEM 
    console.log(cart)

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


Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      technique: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      carusel: PropTypes.array,
      counter: PropTypes.number.isRequired
    })
  ),
  loadProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  more: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired
};


export default Cart;