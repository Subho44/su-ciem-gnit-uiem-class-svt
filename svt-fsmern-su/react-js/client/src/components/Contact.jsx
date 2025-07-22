import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Clientform from './Clientform';
import Clientlist from './Clientlist';


const Contact = () => {
  const [clients,setClients] = useState([]);
  const [seletedclient,setSelectedclient] = useState(null);

  const fetchclients = async()=>{
    const res = await axios.get('http://localhost:5700/api/clients');
    setClients(res.data);
  };
  useEffect(()=>{
    fetchclients();
  },[]);
  return <>
   <Clientform fetchclient={fetchclients} selectedclient={seletedclient} setSelectedclient={setSelectedclient}/>
   <Clientlist clients={clients} fetchclients={fetchclients} setSeletedclient={setSelectedclient}/>
  </>
}

export default Contact