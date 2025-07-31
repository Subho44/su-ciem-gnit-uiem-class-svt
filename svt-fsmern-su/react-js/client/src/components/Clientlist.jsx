import React from 'react'
import axios from 'axios'

const Clientlist = ({clients,fetchclients,setSeletedclient}) => {
 const deleteclient = async(id)=> {
  await axios.delete(`http://localhost:5700/api/clients/${id}`);
  fetchclients();
 }

  return <>
  <table className='table table-dark'>
  <tr>
    <th>name</th>
     <th>sector</th>
      <th>location</th>
       <th>status</th>
        <th>Image</th>
       <th>Action</th>
      
  </tr>
  {
    clients.map(x=>(
        <tr>
        <td>{x.name}</td>
        <td>{x.sector}</td>
        <td>{x.location}</td>
        <td>{x.status}</td>
        <td>
          <img src={`http://localhost:5700/uploads/${x.image}`}/>
        </td>
        <td>
            <button className='btn btn-dark' onClick={()=>setSeletedclient(x)}>Edit</button>
             <button className='btn btn-danger' onClick={()=>deleteclient(x._id)}>Delete</button>
        </td>
        </tr>
    ))
  }

  </table>

  </>
}

export default Clientlist