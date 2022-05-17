
import { useState,useEffect } from 'react';
import './App.css';
import Spinner from './Components/Spinner';
import Userdata from './Components/Userdata';

function App() {
  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    setData(await res.json());
    setLoading(false);
}

useEffect(() => {
  getUsers();
},[])

if(loading){
  return <Spinner/>
}

  return (
    <>
     <Userdata data={data}/>
    </>
  );
}

export default App;
