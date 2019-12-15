import React from 'react';

import SubPage from '../../features/ProductSubPage/SubPageContainer'

const ProductSupPage = props => (
  <div>
    <SubPage id={props.match.params.id} />
  </div>
);

export default ProductSupPage;