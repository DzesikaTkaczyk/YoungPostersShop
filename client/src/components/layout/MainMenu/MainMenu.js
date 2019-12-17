import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './MainMenu.scss';
import { Navbar, Nav } from 'react-bootstrap';

const MainMenu = ({ links, location }) => (
  <ul className="main-menu">
    { links.map((link, index) =>
      <Nav.Link>
        <li key={index}>
          <Link className={(location.pathname === link.path && 'active') || ''} to={link.path}>{link.title}</Link>
        </li>
      </Nav.Link>
    )}
  </ul>
);

MainMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

export default withRouter(props => <MainMenu {...props}/>);
