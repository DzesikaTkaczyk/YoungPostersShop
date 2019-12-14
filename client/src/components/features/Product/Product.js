import React from 'react';
import { PropTypes } from 'prop-types';
import './Product.scss';
import { Link } from "react-router-dom";

import Button from '../../common/Button/Button';

class Product extends React.Component {
  render() {
    const { id, title, size, author, image, price } = this.props;

    return(
      <div className="productBox">
        <Link to={`/products/${id}`}>
          <div className='productCover'>
            <img 
              className='coverPhoto'
              src={image} 
              alt={title}/>
          </div>
          <h2>{title}</h2>
          <p className='hoverinfo'>{author}</p>
          <p>{price}zł</p>
          <p className='hoverinfo'>{size}</p>
        </Link>
      </div>
    );
  };
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

export default Product;