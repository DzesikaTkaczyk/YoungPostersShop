import { connect } from 'react-redux';
import { getCart, getSumPrice, more, less, sumPrice, removeProduct, addDiscountCode , getDiscountStatus, getRequest, loadCartRequest, endRequest } from '../../../redux/productsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
	cart: getCart(state),
	price: getSumPrice(state),
	discountStatus: getDiscountStatus(state),
	request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
	loadCart: () =>dispatch(loadCartRequest()),
	more: (id) => dispatch(more(id)),
	less: (id) => dispatch(less(id)),
	removeProduct: (id) => dispatch(removeProduct()),
	addDiscountCode: () => dispatch(addDiscountCode()),
	sumPrice: () => dispatch(sumPrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);