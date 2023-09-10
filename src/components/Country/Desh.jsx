import { useState } from 'react';
import './Desh.css'
import CountryDtails from '../CountryDtails/CountryDtails';
const Desh = ({countryInfo ,handleVisitedCountry ,handleVisitedFlags}) => {
    console.log(countryInfo);
    const {name,flags,population,area,cca3}=countryInfo;

    const [visited ,setVisited]=useState(false);

    const handleVisited =()=>{
        setVisited(!visited);
    }

    const passWithParams =()=>{
        handleVisitedCountry(countryInfo)
    }

    console.log(handleVisitedCountry);
    return (
        <div className={`desh ${visited && 'visited'}`}>
            <h3 style={{color:visited ? 'blue':'black'}}>Name: {name.common}</h3>
            <img className='img-size' src= {flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code:{cca3}</small></p>
            
            <button onClick={passWithParams}>Mark Visited</button>

            <button onClick={() => handleVisitedFlags(countryInfo.flags.png)}>Add Flags</button>

            <button onClick={handleVisited}>{visited? 'Visited':'Going'}</button>
            {
                visited ? 'Visited this country.': 'I want to visit this country'
            }

            <hr />
            <CountryDtails>
            countryInfo={countryInfo}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            </CountryDtails>
        </div>
    );
};

export default Desh;