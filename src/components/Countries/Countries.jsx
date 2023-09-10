import { useEffect } from "react";
import { useState } from "react";
import Desh from "../Country/Desh";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setvisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flags) => {
        console.log('flag adding');
        // console.log(flags);
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags)

    }
    return (
        <div >
            <h3>Countries:{countries.length}</h3>
            {/* visited country */}
            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* visited flag */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            {/* Display countries */}
            <div className="countries-container">
                {
                    countries.map(country => <Desh key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} countryInfo={country}></Desh>)
                }
            </div>
        </div>
    );
};

export default Countries;