
import React from 'react';
import { connect } from 'react-redux';
import { sortProducts, getProductsSort } from '../../../redux/productsRedux';
import SortPanel from './SortPanel';
import PropTypes from 'prop-types';

const SortProdcutsContainer = ({ sortProducts }) => {
    return <SortPanel sortProducts={sortProducts} />
};

SortProdcutsContainer.propTypes = {
    sortProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    product: getProductsSort(state),
});

const mapDispatchToProps = dispatch => ({
    sortProducts: (sort) => dispatch(sortProducts(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortProdcutsContainer);