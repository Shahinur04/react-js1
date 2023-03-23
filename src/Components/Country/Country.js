import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props)
    return (
        <div className='country'>
           <h1>Country Name:{props.name}</h1> 
           <p>population:{props.Population}</p>
           <p>Area:{props.Area}</p>
        </div>

    );
};

export default Country;