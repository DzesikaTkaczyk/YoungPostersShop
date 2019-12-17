import React from 'react';
import { PropTypes } from 'prop-types';
//import './CartList.scss'

import ProductCart from './ProductCart';

const ProductsList = ({ products }) => (
  <div>
    <div className="productsList">
      {products.map(product => <ProductCart key={product.id} {...product} />)}
    </div>
  </div>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      tag: PropTypes.string,
    })
  ),
};

export default ProductsList;