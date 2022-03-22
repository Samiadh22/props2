import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'

export default function Input({type, className, placeholder, label}) {
  return (
    <div>
         <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">{label}</InputGroup.Text>
    <FormControl
      placeholder={placeholder}
      className={className}
      type={type}
    />
  </InputGroup>
    </div>
  )
}
