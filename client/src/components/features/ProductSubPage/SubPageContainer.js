import { connect } from 'react-redux';
import { getSingleProduct, getRequest, loadSingleProductRequest } from '../../../redux/productsRedux';
import SubPage from './SubPage';

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  loadProduct: id => dispatch(loadSingleProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubPage);