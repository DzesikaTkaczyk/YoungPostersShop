import React from 'react';
import { PropTypes } from 'prop-types';

import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Products extends React.Component {
	componentDidMount() {
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage || 1, productsPerPage);
  }

  loadProductsPage = (page) => {
    const { loadProductsByPage, productsPerPage } = this.props;
    loadProductsByPage(page, productsPerPage);
  }

  render() {
    const { products, request, pages, pagination, presentPage } = this.props;
    const pending = request.pending;
    const success = request.success;
    const error = request.error;
    const { loadProductsPage } = this;

    return (
      <div>
        //{(pending === true || success === null) && <Spinner />}
        {pending === false && success === true && products.length > 0 && pagination === true && 
          <div>
            <ProductsList products={products} />
            <Pagination pages={pages} onPageChange={loadProductsPage} initialPage={presentPage} />
          </div>}
        {pending === false && success === true && products.length > 0 && pagination === false &&
          <div><ProductsList products={products} /></div>}
        {pending === false && error !== null  && <Alert variant='error'>Connect error</Alert>}
        {pending === false && success === true && products.length === 0 && <Alert variant='info'>No products available</Alert>}
      </div>
    )
  }
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      technique: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.object.isRequired,
    })
  ),
  loadProductsByPage: PropTypes.func.isRequired,
  resetRequest: PropTypes.func.isRequired,
};

Products.defaultProps = {
  initialPage: 1,
  productsPerPage: 4,
  pagination: true
};

export default Products;