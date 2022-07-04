import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MyModalTable from './MyModalTable';
import { Link } from 'react-router-dom';

const MyModal = ({ quiz }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {quiz.name}
      </Button>

      <Modal show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Хотите пройти тест?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MyModalTable {...quiz} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setModalShow(false)}>
            Нет
          </Button>
          <Link to={`/${quiz.id}`}>
            <Button variant="success" onClick={() => setModalShow(false)}>
              Да
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
