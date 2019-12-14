import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductsList.scss'

import Product from '../Product/Product';


const ProductsList = ({ products }) => (
  <div>
    <div className="productsList">
      {products.map(product => <Product key={product.id} {...product} />)}
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
      image: PropTypes.object.isRequired,
      tag: PropTypes.string,
    })
  ),
};

export default ProductsList;