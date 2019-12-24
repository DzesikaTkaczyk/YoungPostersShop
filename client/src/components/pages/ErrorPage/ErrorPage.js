import React from 'react';
import error from './error.png'
import './ErrorPage.scss'

const Error = () => (
  <div className='col-xs-12 col-sm-12'>
  	<h1>404</h1>
    <div><img src={error} alt="404" className="error"/></div>
  </div>
);

export default Error;