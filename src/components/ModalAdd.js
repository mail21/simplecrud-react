import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import data from './../data';

function ModalAdd() {
    const [show, setShow] = useState(false);
    // const [data1, setData] = useState(data);
  
    const handleClose = (event) => {
        setShow(false)
    };

    const handleShow = () => setShow(true);

    const handleSubmit = (event) =>{
        event.preventDefault();
        setShow(false)
        let newData = {
            id: data[data.length - 1].id + 1,
            cashie : event.target.elements.formCashie.value,
            product : event.target.elements.formProduct.value,
            category : event.target.elements.formKategori.value,
            price : event.target.elements.formPrice.value
        }
        // setData(data1.concat(newData))
        // setData(data => [...data1, newData])
        data.push(newData)
        console.log(data)
    }
  
    return (
      <>
        <Button variant="primary" className="btn btn-light" onClick={handleShow}>
            ADD
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCashie">
                <Form.Label>Cashie</Form.Label>
                <Form.Control as="select">
                <option>Ismail</option>
                <option>Kevin</option>
                <option>Robert</option>
                <option>Tino</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formProduct">
                <Form.Label>Product</Form.Label>
                <Form.Control type="text" placeholder="latte,coffe,cruisant..." />
            </Form.Group>
            <Form.Group controlId="formKategori">
                <Form.Label>Kategori</Form.Label>
                <Form.Control as="select">
                <option>Drinks</option>
                <option>Food</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="harga" />
            </Form.Group>
             
            <div className="d-flex justify-content-around">
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button type="submit" variant="primary" onClick={handleClose}>
                Save Changes
                </Button>
            </div>

            </Form>
          </Modal.Body>
         
        </Modal>

      </>
    );
  }

  export default ModalAdd;