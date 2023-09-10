
const CountryData = ({countryInfo}) => {
    return (
        <div>
            <p><small>Country Data:{countryInfo?.name?.common}</small></p>
        </div>
    );
};

export default CountryData;