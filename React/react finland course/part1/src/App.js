import React, {useState, useEffect} from 'react'
import axios from 'axios'

//Componentes
import Search from './Exercises 2.12-2.14/Search'
import ShowCountries from './Exercises 2.12-2.14/ShowCountries'

const App = () => {

    const [search, setSearch] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        
        axios.get(`https://restcountries.com/v2/all`)
             .then(response => {
                 setCountries(response.data)
                 //console.log(response.data)
             })

    }, [])

    
    const filteredCountries = search !== '' ? 
    countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase())) :
    countries

    const handleInputChange = (e) =>{

        if(e.target.value.length === 0){
            setSearch('')
        }else{
            setSearch(e.target.value)
        }

    }

    return (
        <div>
            <Search value={search} onChange={handleInputChange}/>

            <ShowCountries filteredCountries={filteredCountries} setSearch={setSearch} />

        </div>
    )
}

export default App
