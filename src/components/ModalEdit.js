import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import data from './../data';
import editicon from './../img/editicon.png';

class ModalEdit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : false,
            price : this.props.price,
            category : this.props.category,
            product : this.props.product,
            cashie : this.props.cashie
        }
        // this.onTodoChange = this.onTodoChange.bind(this)
    }
  
    handleClose = (event) => {
        this.setState({show:false})
    };

    handleShow = (event) => {
        this.setState({show:true})
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({show:false})

        data.forEach(el => {
            if(el.id == this.props.id){
                el.cashie = event.target.elements.formCashie.value;
                el.price = event.target.elements.formPrice.value;
                el.product = event.target.elements.formProduct.value;
                el.category = event.target.elements.formKategori.value;
            }
        })
        console.log(data)
    }

    
    onChange = (e) => {
        console.log(e.target.name)
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    
  
    render(){
        return (
            <>
              <a onClick={this.handleShow}><img src={editicon} width="40" alt="editicon" /></a>
      
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Adding Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formCashie">
                      <Form.Label>Cashie</Form.Label>
                      <Form.Control as="select" name="cashie" value={this.state.cashie} onChange={this.onChange}>
                          <option>Ismail</option>
                          <option>Kevin</option>
                          <option>Robert</option>
                          <option>Tino</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formProduct">
                      <Form.Label>Product</Form.Label>
                      <Form.Control type="text" name="product" value={this.state.product} onChange={this.onChange} />
                  </Form.Group>
                  <Form.Group controlId="formKategori">
                      <Form.Label>Kategori</Form.Label>
                      <Form.Control as="select" name="category" value={this.state.category} onChange={this.onChange}>
                      <option>Drinks</option>
                      <option>Food</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formPrice">
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="text" name="price" value={this.state.price} placeholder="harga" onChange={this.onChange}/>
                  </Form.Group>
                   
                  <div className="d-flex justify-content-around">
                      <Button variant="secondary" onClick={this.handleClose}>
                      Close
                      </Button>
                      <Button type="submit" variant="primary" onClick={this.handleClose}>
                      Save Changes
                      </Button>
                  </div>
      
                  </Form>
                </Modal.Body>
               
              </Modal>
      
            </>
          );
    }
  }

  export default ModalEdit;