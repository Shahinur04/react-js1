import React from "react";
import "./Country.css";
const Country = (props) => {
    const {area,region,population,name,flags}=props.country
    // console.log(props)
  return (
    <div className="country bg-success">
      <h1>Name:{name.common}</h1>
      <p>Population:{population}</p>
      <img src={flags.png} alt="" />
      <p>Area:{area}</p>
      <p>Region:{region}</p>
      
      
    </div>
  );
};

export default Country;
