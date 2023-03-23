import React from "react";
import "./Country.css";
const Country = (props) => {
    const {area,region,population,name}=props.country
    // console.log(props)
  return (
    <div className="country">
      <h1>Name:{name.common}</h1>
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p>Region:{region}</p>
      <p></p>
      
    </div>
  );
};

export default Country;
