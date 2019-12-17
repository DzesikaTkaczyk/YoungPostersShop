import React from 'react';
import { PropTypes } from 'prop-types';

import CartList from '../CartList/CartList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Cart extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products, request } = this.props;
    const pending = request.pending;
    const success = request.success;
    const error = request.error;

    return (
      <div>
        {(pending === true || success === null) && <Spinner />}
        {pending === false && success === true && products.length > 0 && <CartList products={products} />}
        {pending === false && error !== null  && <Alert variant='error'>Connect error</Alert>}
        {pending === false && success === true && products.length === 0 && <Alert variant='info'>No products</Alert>}
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
      tag: PropTypes.string,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
};

export default Cart;