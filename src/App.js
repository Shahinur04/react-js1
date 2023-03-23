import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
<LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries(){
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>setCountries(data))
  },[])
  // console.log(setCountries)
return (
<div>
  <h1>Countries Hey What is going all around the World</h1>
  <h3>{countries.length}</h3>
  {
    countries.map(country =>{
    // <p>{country.name.common}</p>
  return (<div>
    <p>Name:{country.name.common} </p> <p>Population:{country.population}</p>
  </div>)
  })
    
  }
</div>
)
}

export default App;
