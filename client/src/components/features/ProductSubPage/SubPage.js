import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import './SubPage.scss'
import '../../../styles/layout.scss';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import { BASE_URL } from '../../../config';


class SingleProduct extends React.Component {
  componentDidMount() {
    const { loadProduct, id } = this.props;
    loadProduct(id);
  }

  render() {
    const { product, request } = this.props;
    const pending = request.pending;
    const success = request.success;
    const error = request.error;
    const { location } = this.props;
    console.log(location)

    return (
      <div>
        {(pending === true || success === null) && <Spinner />}
        {pending === false && success === true && product !== null && (
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-5 col-lg-5'>
              <div className='singleProductCover'>
                <img 
                  className='singleCoverPhoto'
                  src={product.image} 
                  alt={product.title}/>
              </div>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-7 col-lg-7'> 
              <h2>{product.title}</h2>
              <p>{product.author}</p>
              <p>{product.technique}</p>
              <div className='size'>
                <p>{product.size}cm</p>
              </div>
              <p>{product.price}zł</p>
              <button> Dodaj do koszyka </button>
            </div>
          </div>)
        }
        {pending === false && error !== null  && <Alert variant='error'>{error}</Alert>}
      </div>
    )
  }
};

SingleProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      technique: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  loadProduct: PropTypes.func.isRequired
};

export default withRouter(props => <SingleProduct {...props}/>);