import React,{useState,useEffect} from 'react'
import axios from "axios"

const Clientform = ({fetchclient,selectedclient,setSelectedclient}) => {
    const [form,setForm] = useState({name:"",sector:"",location:"",status:""});
    useEffect(()=>{
        if(selectedclient) setForm(selectedclient);
    },[selectedclient]);

    const hc = (e)=>{
     setForm({...form,[e.target.name]:e.target.value});
    };
    const hs= async(e)=>{
     e.preventDefault();
     if(selectedclient) {
        await axios.put(`http://localhost:5700/api/clients/${selectedclient._id}`,form);
        setSelectedclient(null);
     } else {
         await axios.post('http://localhost:5700/api/clients',form);
     }
     setForm({name:"",sector:"",location:"",status:""});
     fetchclient();
    };

    
  return <>
  <form onSubmit={hs}>
   <div className='form-group'>
    <label>Name:</label>
    <input 
        type='text'
        name='name'
        placeholder='enter...'
        onChange={hc}
        className='form-control col-md-3'
        value={form.name}
    />
   </div>
   <div className='form-group'>
    <label>Sector:</label>
    <input 
        type='text'
        name='sector'
        placeholder='enter...'
        onChange={hc}
        className='form-control col-md-3'
        value={form.sector}
    />
   </div>
   <div className='form-group'>
    <label>Location:</label>
    <input 
        type='text'
        name='location'
        placeholder='enter...'
        onChange={hc}
        className='form-control col-md-3'
        value={form.location}
    />
    
   </div>
   <div className='form-group'>
    <label>Status:</label>
    <input 
        type='text'
        name='status'
        placeholder='enter...'
        onChange={hc}
        className='form-control col-md-3'
        value={form.status}
    />
   </div>
 <button type='submit'>{selectedclient ? "Update":"Add"} Client</button>
  </form>


  </>
}

export default Clientform