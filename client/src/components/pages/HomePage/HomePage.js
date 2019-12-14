import React from 'react';
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap'

import Products from '../../features/Products/ProductsContainer';
import SortPanel from '../../features/SortPanel/SortPanel';

const HomePage = () => (
	<Container>
		<Row>
			<Col xs={12} sm={12} md={3} lg={2} > <SortPanel /> </Col>
			<Col xs={12} sm={12} md={9} lg={10} > <Products /></Col>
		</Row>
	</Container>
);

export default HomePage;