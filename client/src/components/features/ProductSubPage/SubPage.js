import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import './SubPage.scss'
import '../../../styles/layout.scss';

import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderAlert: false
    }
    this.showAlert = this.showAlert.bind(this);
  }

  showAlert() {
    this.setState({orderAlert: true})
  }

  componentDidMount() {
    const { loadProduct, id } = this.props;
    loadProduct(id);
  }

  handleAddToCart = () => {
    const { product, cart, addToCart, more, sumPrice, match} = this.props
    const isAdded = cart.filter(product => product.id === match.params.id);
    
   if(isAdded.length === 0) {
        addToCart(product);
    } else {
        more(match.params.id);
    };

    sumPrice();
      

  }

  render() {
    const { product, request } = this.props;
    const pending = request.pending;
    const success = request.success;
    const error = request.error;
    //const { location } = this.props;
    const { handleAddToBasket } = this;

    return (
      <div>
        {(pending === true || success === null) && <Spinner />}
        {pending === false && success === true && product !== null && (
          <div className='OneProduct'>
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
                <div className='description'>
                  <div className='addToCart'>
                    <Alert>Added to cart.</Alert>
                  </div>
                  <p className='title titleLine'>{product.title}</p>
                  <p className='titleLine'>{product.author}</p>
                  <p>{product.technique}</p>
                  <p className='sometext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <div className='priceSection'>
                    <div>
                      <p className='size'>{product.size}cm</p>
                    </div>
                    <p className='price'>{product.price}zł</p>
                  </div>
                  <button onClick={this.handleAddToCart}> Add to cart </button>
                </div>
              </div>
            </div>         
          </div>
        )}
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
      carusel: PropTypes.array,
      counter: PropTypes.number.isRequired
    })
  ),
  loadProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  more: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired
};

export default withRouter(props => <SingleProduct {...props}/>);