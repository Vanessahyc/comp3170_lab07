import { useState, useEffect } from "react";
import { useNavigate, Outlet, data } from 'react-router-dom';

export default function Countries({setSelectedCountry}) {
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountries = async () => {
            try{
                const response = await fetch('https://restcountries.com/v3.1/name/kingdom');
                const data = await response.json();
                setCountries(data);
            } catch {
                console.error('Error fetching countries', error);
            }
        }
        fetchCountries();
    }, []);

    const handleChange = (e) => {
        const selectedCountry = countries.find(
            (country) => country.cca2 === e.target.value
        );

        if(selectedCountry) {
            navigate(`/countries/${selectedCountry.cca2}`, {
                state: { data: selectedCountry},
            });
        }
    };

    return(
        <div>
            <h1>World Kingdoms</h1>
            <select onChange={handleChange} defaultValue=''>
                <option value='' disabled>Select a country</option>
                {
                    countries.map((country) => (
                        <option key={country.cca2} value={country.cca2}>
                            {country.name.common}
                        </option>
                    ))
                }
            </select>
            <Outlet/>
        </div>
    );
}