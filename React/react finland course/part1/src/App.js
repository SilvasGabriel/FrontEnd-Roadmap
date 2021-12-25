import React, { useState } from 'react'

import Persons from './Exercises 2.6-2.10/Persons'

const App = () => {

    const [persons, setPersons] = useState([{ name: 'Artos Hellas' }, { name: 'Ada Lovelace' }])

    const [newName, setNewName] = useState('')

    const addPerson = (e) => {

        e.preventDefault()

        const addPersonObject = {
            name: newName,
        }

        const existentPersonName = persons.some(person => person.name === newName)


        if(existentPersonName){

            alert(`${newName} is already added to the phonebook.`)
            
        }else{

            setPersons(persons.concat(addPersonObject))
            setNewName('')

        }
  
    }


    return (
        <div>
            <h2>Phonebook</h2>

            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div>
                    <br/><button type='submit'>add</button>
                </div>
            </form>

            <h2>Numbers</h2>

            <div>
                {persons.map(person => <Persons key={person.name} persons={person} />)}
            </div>
        </div>
    )
}

export default App
