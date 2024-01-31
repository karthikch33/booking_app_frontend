import React from 'react';
import { Spinner } from 'react-bootstrap';
const LoadingPage = (props) => {
  return (
    <div className='loader-container d-flex align-items-center  justify-content-center' style={{height:'50vh'}}>
        <Spinner animation='grow' variant='primary'/>
        <Spinner animation='grow' variant='success'/>
        <Spinner animation='grow' variant='danger'/>
        <Spinner animation='grow' variant='info'/>
        </div>
  );
};

export default LoadingPage;
