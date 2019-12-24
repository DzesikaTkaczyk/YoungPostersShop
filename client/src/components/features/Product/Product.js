import React from 'react';
import { PropTypes } from 'prop-types';
import './Product.scss';
import { Link } from "react-router-dom";
import '../../../styles/layout.scss';

class Product extends React.Component {
  render() {
    const { id, title, size, author, image, price, tag } = this.props;

    return(
      <div className='col-xs-12 col-sm-6 col-md-6 col-lg-4' >
        <div className='productBox'>
          <Link to={`/${id}`}>
            <div className='productCover'>
              <div className='whitebox'/>
              <img 
                className='coverPhoto'
                src={image} 
                alt={title}/>
            </div>
            <p className='title'>{title}</p>
            <p className='price'>{price}zł</p>
            <p className='hoverinfo size'>{size}cm</p>
            <p className='optionalText'>{tag}</p>
            <div className='icons'>
              <div className='heart'><ion-icon name="heart-empty"></ion-icon></div>
              <div className='heartHover'><ion-icon name="heart"></ion-icon></div>
            </div>
          </Link>
        </div>
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
  image: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

export default Product;