import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';
import './Footer.scss';

class Footer extends React.Component {
	state = {
		links: [
			{ path: '/products', title: 'Home' },
			{ path: '/faq', title: 'FAQ' },
			{ path: '/rules', title: 'Regulamin' },
			{ path: '/contact', title: 'Kontact' },
		],
	}
	render() {
		const { links } = this.state;
		return (
			<nav className='footer'>
				<p>Dżesika Tkaczyk</p>
				<MainMenu links={links} className='map'/>
			</nav>
		);
	}

}

export default Footer;