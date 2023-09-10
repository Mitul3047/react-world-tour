// import { useEffect } from "react";
// import { useState } from "react";
// import Country from './../Country/Country';

// const Countries = () => {
//     const [countries, setCountry] = useState([])


//     useEffect(() => {
//         fetch('https://restcountries.com/v3.1/all')
//             .then(r => r.json())
//             .then(data => setCountry(data))
//     }, [])
//     return (
//         <div>
//             <h3>Countries: {countries.length}</h3>
//             {
//                 countries.map(country => <Country>country={country}</Country>)
//             }
//         </div>
//     );
// };

// export default Countries;

import { useEffect, useState } from "react";
import Country from './../Country/Country';
import "./Countries.css"
const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(r => r.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>
            <div className="countries-container">
            {
            countries.map(country => <Country country={country} key={country.cca3} />)
            }
            </div>
            
        </div>
    );
};

export default Countries;
// key={country.name.common}