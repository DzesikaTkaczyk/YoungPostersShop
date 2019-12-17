  import { connect } from 'react-redux';
import { getProducts, getRequest, loadCartRequest } from '../../../redux/productsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadCartRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);