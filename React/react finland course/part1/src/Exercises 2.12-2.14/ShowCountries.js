import React from 'react'

//Componentes
import ShowWeater from './ShowWeater'

const ShowCountries = ({ filteredCountries, setSearch }) => {

    if (filteredCountries.length === 1) {

        const country = filteredCountries[0]

        return (
            <>
                <h1>{country.name}</h1>
                <div>capital: {country.capital} </div>
                <div>population: {country.population}</div>
                <div><h2>languages</h2></div>
                <ul>
                    {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
                </ul>
                <img src={country.flag} alt={country.name} width='120rem' height='120rem' />
                <ShowWeater country={country}/>
            </>
        )

    }


    if (filteredCountries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter.
            </div>
        )
    }

    return (

        <div>

            {filteredCountries.map((country) =>

                <div key={country.name}>
                    {country.name}{"   "}<button value={country.name} onClick={(e) => setSearch(e.target.value)}>show</button>
                </div>
            )}

        </div>
    )

}


export default ShowCountries
