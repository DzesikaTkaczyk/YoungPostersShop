import React from 'react';
import NavBar from '../../features/NavBar/NavBar';
import Footer from '../../features/Footer/Footer';
import PageContainer from '../PageContainer/PageContainer';

const MainLayout = ({ children }) => (
	<div>
		<PageContainer>
			<NavBar />
			{children}
			<Footer />
		</PageContainer>
	 </div>
);

export default MainLayout;