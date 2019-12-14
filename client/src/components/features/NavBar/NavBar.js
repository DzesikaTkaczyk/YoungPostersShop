import React from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
import './NavBar.scss';

class NavBar extends React.Component {
	state = {
		links: [
			{ path: '/products', title: 'Home' },
			{ path: '/faq', title: 'FAQ' },
			{ path: '/rules', title: 'Regulamin' },
			{ path: '/contact', title: 'Kontact' },
			{ path: '/cart', title: 'Koszyk' },
		],
	}
	render() {
		const { links } = this.state;
		return (
			<nav className="navbar">
				<Logo />
				<MainMenu links={links} />
			</nav>
		);
	}

}

export default NavBar;