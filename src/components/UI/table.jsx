import React from 'react'
import {Table} from 'react-bootstrap'
import dateFormat from "dateformat";

export default function CustomTable({Data}) { 
  return (
    <div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>firstname</th>
      <th>lastname</th>
      <th>email</th>
      <th>password</th>
      <th>created_At</th>
      <th>roles</th>
    </tr>
  </thead>
  <tbody>
      {Data.map ((el,key) => 
      <tr key= {key} id= {key}>
      <td>{key+1}</td>
      <td>{el.firstname}</td>
      <td>{el.lastname}</td>
      <td>{el.email}</td>
      <td>{Math.floor(Math.random() * el.password.length)}</td>
      <td>{dateFormat(el.created_At.$date, 'yyyy-mm-dd')}</td>
      <td>{el.roles[0].role}</td>
    </tr>
      )} 
  </tbody>
</Table>
    </div>
  )
}
