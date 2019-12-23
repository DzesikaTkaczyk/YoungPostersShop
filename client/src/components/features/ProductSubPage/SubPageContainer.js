import { connect } from 'react-redux';
import { getSingleProduct, getRequest, loadSingleProductRequest, addToCartRequest, cart, getCart} from '../../../redux/productsRedux';
import SubPage from './SubPage';

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state),
  cart: getCart(state)
})

const mapDispatchToProps = dispatch => ({
  loadProduct: id => dispatch(loadSingleProductRequest(id)),
  addToCart: (cart) => dispatch(addToCartRequest(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubPage);