import CountryData from "../CountryData/CountryData";

const CountryDtails = (props) => {
// const CountryDtails = ({countryInfo,handleVisitedCountry,handleVisitedFlags}) => {

    return ( 
        <div>
            <h4>Country Details</h4>
            <hr />

            <CountryData {...props}></CountryData>
            {/* <CountryData>
            countryInfo={countryInfo}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            </CountryData> */}
        </div>
    );
};

export default CountryDtails;