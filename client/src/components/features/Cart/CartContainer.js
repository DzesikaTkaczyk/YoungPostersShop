import { connect } from 'react-redux';
import { getCart, getSumPrice, more, less, sumPrice, removeProduct, addDiscountCode , getDiscountStatus, getRequest, loadCartRequest} from '../../../redux/productsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
	cart: getCart(state),
	//price: getSumPrice(state),
	//discountStatus: getDiscountStatus(state),
	request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
	/*more: (id) => dispatch(more(id)),
	less: (id) => dispatch(less(id)),
	removeProduct: (id) => dispatch(removeProduct(id)),
	addDiscountCode: () => dispatch(addDiscountCode()),
	sumPrice: () => dispatch(sumPrice()),*/
	loadCart: () => dispatch(loadCartRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);