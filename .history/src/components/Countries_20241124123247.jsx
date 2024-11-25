import { useState, useEffect } from "react";

export default function Countries({setSelectedCountry}) {
    const [countries, setCountries] = useState([]);
    const [selected, setSelected] = useState('');

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
        const countryCode = e.target.value;
        setSelected(countryCode);

        const selectedCountry = countries.find((country) => country.cca2 === countryCode);
        setSelectedCountry(selectedCountry);
    }

    return(
        <div>
            <h1>World Kingdoms</h1>
            <select value={selected} onChange={handleChange}>
                <option value='' disabled>Select a country</option>
                {
                    countries.map((country) => (
                        <option key={country.cca2} value={country.cca2}>
                            {country.name.common}
                        </option>
                    ))
                }

            </select>
        </div>
    );
}