import React from 'react';

import SubPage from '../../features/ProductSubPage/SubPageContainer'

const ProductSupPage = props => (
  <div className='col-xs-12 col-md-12'>
    <SubPage id={props.match.params.id} />
  </div>
);

export default ProductSupPage;