import { useLocation } from "react-router-dom";

export default function Details() {
    const { state } = useLocation();

    return(
        <div>
            <h2>Kingdom of {country.name.common}</h2>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{ width: "300px", height: "200px", display: "block" }}/>
            <p>Capital: {country.capital}</p>
            <p>Located in: {country.subregion}</p>
        </div>
    );
}