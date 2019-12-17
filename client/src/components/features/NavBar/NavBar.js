import React from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
import './NavBar.scss';
import { Link } from "react-router-dom";
import basket from './basket.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';

class NavBar extends React.Component {
	state = {
		links: [
			{ path: '/', title: 'Home' },
			{ path: '/faq', title: 'FAQ' },
			{ path: '/rules', title: 'Registry' },
			{ path: '/contact', title: 'Contact' },
		],
	}
	render() {
		const { links } = this.state;
		return (
			<nav className="myNavbar">
				<Navbar collapseOnSelect expand="md">
					<Nav><Navbar.Brand><Logo /></Navbar.Brand></Nav>
					<Navbar.Toggle aria-controls="basic-navbar-nav"  className='burger' />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<MainMenu links={links}/>
							<Nav.Link href='/cart' className='cartLink'> <img src={basket} alt="Cart" className="cart"/></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</nav>
		);
	}

}

export default NavBar;