import React from "react";
import "./Country.css";
const Country = (props) => {
    // console.log(props.country.name.common);
    // console.log(props.country.population);
    // console.log(props.country.area);
    // console.log(props);
    const{population,area,region,name}=props.country;
  return (
    <div className="country">
      <h1>Country Name:{name.common}</h1>
      <p>population:{population}</p>
      <p>Area:{area}</p>
      <p>Region:{region}</p>
      
    </div>
  );
};

export default Country;
