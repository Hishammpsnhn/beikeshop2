import React from 'react'
import { Button, Form } from "react-bootstrap";
function InputBox({type,placeholder,value,onChange}) {
  return (
    <Form.Group controlId="formBasicEmail" className="py-2 ">
    <Form.Control
      className="p-2 border"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </Form.Group>
  )
}

export default InputBox