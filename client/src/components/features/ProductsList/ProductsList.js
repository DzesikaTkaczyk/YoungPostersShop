import React from 'react';
import { PropTypes } from 'prop-types';

import Product from '../Product/Product';

const ProductsList = ({ products }) => (
  <div>
    <section className="products-list">
      {products.map(product => <Product key={product.id} {...product} />)}
    </section>
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
    })
  ),
};

export default ProductsList;