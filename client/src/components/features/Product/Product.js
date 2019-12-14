import React from 'react';
import { PropTypes } from 'prop-types';
import './Product.scss';
import { Link } from "react-router-dom";
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap'

import Button from '../../common/Button/Button';

class Product extends React.Component {
  render() {
    const { id, title, size, author, image, price, tag } = this.props;

    return(
      <Col xs={12} sm={6} md={6} lg={4} >
        <div className="productBox">
        
          <Link to={`/products/${id}`}>
            <div className='productCover'>
              <div className='whitebox'/>
              <img 
                className='coverPhoto'
                src={image} 
                alt={title}/>
            </div>
            <p className='title'>{title}</p>
            <p className='hoverinfo author'>{author}</p>
            <p className='price'>{price}zł</p>
            <p className='hoverinfo size'>{size}cm</p>
            <p className='optionalText'>{tag}</p>
            <div className='icons'>
              <div className='heart'><ion-icon name="heart-empty"></ion-icon></div>
              <div className='heartHover'><ion-icon name="heart"></ion-icon></div>
            </div>
          </Link>
          
        </div>
      </Col>

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
  tag: PropTypes.string,
};

export default Product;