import { connect } from 'react-redux';
import { getCounter, getCart, getSumPrice, removeProduct, more, less, sumPrice } from '../../../redux/productsRedux';

import CounterProducts from './CounterProducts';

const mapStateToProps = state => ({
    count: getCounter(state),
    cart: getCart(state),
    price: getSumPrice(state),
});

const mapDispatchToProps = dispatch => ({
    removeProduct: (id) => dispatch(removeProduct(id)),
    more: (id) => dispatch(more(id)),
    less: (id) => dispatch(less(id)),
    sumPrice: () => dispatch(sumPrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterProducts);