import { connect } from 'react-redux';
import { getSingleProduct, getRequest, loadSingleProductRequest, more, getCart, addToCart, sumPrice } from '../../../redux/productsRedux';
import SubPage from './SubPage';

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state),
  cart: getCart(state)
})

const mapDispatchToProps = dispatch => ({
  loadProduct: id => dispatch(loadSingleProductRequest(id)),
  addToCart: (payload) => dispatch(addToCart(payload)),
  sumPrice: () => dispatch(sumPrice()),
  more: (id) => dispatch(more(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubPage);