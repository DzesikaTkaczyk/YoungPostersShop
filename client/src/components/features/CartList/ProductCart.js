import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductCart.scss';
import { Link } from "react-router-dom";
import '../../../styles/layout.scss';

class ProductCart extends React.Component {
  render() {
    const { id, title, size, author, image, price, tag } = this.props;

    return(
      <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4' >
        <div className='cartBox'>
        
          <Link to={`/products/${id}`}>
            <div className='productCover'>
              <div className='whitebox'/>
              <img 
                className='coverPhoto'
                src={image} 
                alt={title}/>
            </div>
            <p className='title'>{title}</p>
            <p className='author'>{author}</p>
            <p className='price'>{price}zł</p>
            <p className='size'>{size}cm</p>
          </Link>
          
        </div>
      </div>

    );
  };
};

ProductCart.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCart;