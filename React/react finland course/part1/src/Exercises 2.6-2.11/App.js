import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Componentes
import Persons from './Exercises 2.6-2.10/Persons'
import Filter from './Exercises 2.6-2.10/Filter'
import PersonForm from './Exercises 2.6-2.10/PersonForm'

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const addPerson = (e) => {

        e.preventDefault()

        const addPersonObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        const existentPersonName = persons.some(person => person.name === newName)

        const existentPersonNumber = persons.some(person => person.number === newNumber)


        if (existentPersonName) {

            alert(`${newName} is already added to the phonebook.`)

        } else if (existentPersonNumber) {

            alert(`${newNumber} is already added to the phonebook.`)

        } else {

            setPersons(persons.concat(addPersonObject))
            setNewName('')
            setNewNumber('')
        }

    }

    const handleNameChange = (e) =>{

        setNewName(e.target.value)
    
    }

    const handleNumberChange = (e) =>{

        setNewNumber(e.target.value)
    
    }

    const handleFilterChange = (e) => {

        setFilter(e.target.value)
    }

    //1° se o input de filtrar estiver vazio faça 
    const personToShow = filter === '' ? 
        //2° senão filtre o array passando o parametro nome como objeto pois, se passar normal você não conseguirá acessar o parametro dentro do array.
        persons : persons.filter(({name}) => 
                                        name.toUpperCase()
                                            .includes(filter.toUpperCase()) 
        )


    useEffect(() => {
       console.log('first move')
       axios
            .get('http://localhost:3001/persons')
            .then(response=> {
                console.log('Promise retornada!')
                setPersons(response.data)
            })
    }, [])


    return (
        <div>
            <h2>Phonebook</h2>

            <Filter filter={filter} onChangeFilter={handleFilterChange}/>
            
            <h3>add new</h3>

            <PersonForm onSubmit={addPerson} newName={newName} onChangName={handleNameChange} newNumber={newNumber} onChangNumber={handleNumberChange} />

            <h3>Numbers</h3>

            <div>
                {personToShow.map(person => <Persons key={person.id} persons={person} />)}
            </div>
        </div>
    )
}

export default App
