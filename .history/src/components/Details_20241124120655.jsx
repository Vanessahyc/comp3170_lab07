import { useLocation } from "react-router-dom";

export default function Details({country}) {

    return(
        <div>
            <h2>Kingdom of {country.name.common}</h2>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{ width: "300px", height: "200px", display: "block" }}/>
            <p>Region: {country.region}</p>
            <p>Subregion: {country.subregion}</p>
        </div>
    );
}