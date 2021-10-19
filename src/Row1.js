import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
class Row1 extends React.Component {
  render() {
    return <div className="Row1">
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </div>;
  }
}
export default Row1;
