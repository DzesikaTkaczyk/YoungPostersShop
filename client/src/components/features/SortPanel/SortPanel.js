import React from 'react';
import PropTypes from "prop-types";

import './SortPanel.scss';

const SortPanel = () => (
  <div className='sortpanel'>
    <h2>Sort</h2>
    <div>
		<p>Name A-Z</p>
		<p>Name Z-A</p>
		<p>Price</p>
		<p>Kosowski</p>
		<p>Matiszu</p>
		<p>Podkoscielny</p>
		<p>Skwarska</p>		
		<p>Wiur</p>
    </div>
  </div>
);

export default SortPanel;