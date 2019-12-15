import React from 'react';
import NavBar from '../../features/NavBar/NavBar';
import Footer from '../../features/Footer/Footer';
import PageContainer from '../PageContainer/PageContainer';
import './MainLayout.scss'

const MainLayout = ({ children }) => (
	<div>
		<PageContainer>
			<NavBar />
			<div className='content'>{children}</div>
			<Footer />
		</PageContainer>
	 </div>
);

export default MainLayout;