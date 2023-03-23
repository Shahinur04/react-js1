import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  // console.log(countries)
  return (
    <div>
      <h1>Vallage nh kicu{}</h1>
      {countries.map(country=><Country country={country}></Country>)}


  







      {/* npm{countries.map((country) => console.log(country))} */}
      {/* {countries.map((country) => <Country country={country}> */}

        
          {/* // name={country.name.common}
          // country={country}
          // Population={country.population}
          // Area={country.area}
          // Region={country.region} */}
        {/* </Country>
      )} */}
    </div>
  );
};

export default Countries;
