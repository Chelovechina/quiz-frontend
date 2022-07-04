import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const MySpinner = () => {
  return (
    <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </Spinner>
    </div>
  );
};

export default MySpinner;
