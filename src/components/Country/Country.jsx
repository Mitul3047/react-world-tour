

// const Country = ({country}) => {
//     console.log(country)
//     return (
//         <div>
//         <h3>Name</h3>
//         </div>
//     );
// };

// export default Country;
import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    // console.log(country)
    const {name, flags, area, population, cca3} = country
    
    const [visited, setVisited] = useState(false)

     const handleVisted = () =>{
        setVisited(!visited)
     }

    return (
        <div className= {`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags?.png}  alt="" />
            <p>Popullation : {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisted}>{visited ? 'visited' : 'Going'}</button>
            {/* {
                visited && ' I have visited'
            } */}
{visited ? 'I have Visited' : 'Going to visit'}
        </div>
    );
};

export default Country;
