import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = (props) => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
           <h1>Vallage nh kicu{}</h1> 
           {
            countries.map(country=>console.log(country))
           }
{
    countries.map(country=><Country name={country.name.common}
     Population={country.population}
     Area={country.area}></Country>)
}
        </div>
    );
};

export default Countries;