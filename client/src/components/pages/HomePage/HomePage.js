import React from 'react';
import '../../../styles/layout.scss';

import Products from '../../features/Products/ProductsContainer';
import SortPanel from '../../features/SortPanel/SortPanelContainer';

const HomePage = () => (
	<div className='row'>
		<div className='col-xs-12 col-sm-12 col-md-3 col-lg-2'> <SortPanel /></div>
		<div className='col-xs-12 col-sm-12 col-md-9 col-lg-10'> <Products /></div>
	</div>
);

export default HomePage;