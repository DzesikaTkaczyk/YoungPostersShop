import React from 'react';
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap'

import Products from '../../features/Products/ProductsContainer';
import SortPanel from '../../features/SortPanel/SortPanel';

const HomePage = () => (
	<Container>
	<Row>
		<Col xs={12} sm={12} md={4} lg={3} > <SortPanel /> </Col>
		<Col xs='12' sm='12' md='8' lg={9} > <Products /> </Col>
	</Row>
	</Container>
);

export default HomePage;