import React from 'react';
import '../../../styles/layout.scss';

import Cart from '../../features/Cart/CartContainer';

const CartPage = () => (
  <div className='row'>
    <div className='col-xs-12 col-sm-12'>
    	<h1>Your posters</h1>
      	<Cart />
    </div>
  </div>
);

//{localStorage.getItem("productId")};

export default CartPage;