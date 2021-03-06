import { connect } from 'react-redux';
import { getProducts, getRequest, resetRequest, loadProductsByPageRequest, getPages, getPresentPage, getProductsSort } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
	products: getProductsSort(state),
	request: getRequest(state),
	pages: getPages(state),
	presentPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
 	loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageRequest(page, productsPerPage)),
 	resetRequest: () => dispatch(resetRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);