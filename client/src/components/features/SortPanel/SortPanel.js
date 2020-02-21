import React from 'react';
import { PropTypes } from 'prop-types';

import './SortPanel.scss';
import { Navbar, Nav} from 'react-bootstrap';

const SortPanel = ({ sortProducts }) => {
	const handleSort = (key, direction) => {
		sortProducts({ key, direction });
	}

	return (
		<Navbar expand="md">
			<div className='sortpanel'>
				<Nav><Navbar.Brand><h2>Sort</h2></Navbar.Brand></Nav>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className='sortBurger' />
				<Navbar.Collapse id="basic-navbar-nav" className='sortOptions'>
					<Nav.Link className='sortOption' onClick={() => handleSort('title', 'asc')} >Name A-Z</Nav.Link>
					<Nav.Link className='sortOption' onClick={() => handleSort('title', 'desc')} >Name Z-A</Nav.Link>
					<Nav.Link className='sortOption' onClick={() => handleSort('price', 'asc')} >Price</Nav.Link>
					<Nav.Link className='sortOption'>Kosowski</Nav.Link>
					<Nav.Link className='sortOption'>Matiszu</Nav.Link>
					<Nav.Link className='sortOption'>Podkoscielny</Nav.Link>
					<Nav.Link className='sortOption'>Skwarska</Nav.Link>		
					<Nav.Link className='sortOption'>Wiur</Nav.Link>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default SortPanel;