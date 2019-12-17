import React from 'react';
import PropTypes from "prop-types";

import './SortPanel.scss';
import { Navbar, Nav} from 'react-bootstrap';

const SortPanel = () => (
	<Navbar expand="md">
		<div className='col-xs-12 col-sm-12' >
			<div className='sortpanel'>
				<Nav><Navbar.Brand><h2>Sort</h2></Navbar.Brand></Nav>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className='sortBurger' />
				<Navbar.Collapse id="basic-navbar-nav" className='sortOptions'>
					<Nav.Link className='sortOption' >Name A-Z</Nav.Link>
					<Nav.Link className='sortOption' >Name Z-A</Nav.Link>
					<Nav.Link className='sortOption' >Price</Nav.Link>
					<Nav.Link className='sortOption'>Kosowski</Nav.Link>
					<Nav.Link className='sortOption'>Matiszu</Nav.Link>
					<Nav.Link>Podkoscielny</Nav.Link>
					<Nav.Link>Skwarska</Nav.Link>		
					<Nav.Link>Wiur</Nav.Link>
				</Navbar.Collapse>
			</div>
		</div>
	</Navbar>
);

export default SortPanel;