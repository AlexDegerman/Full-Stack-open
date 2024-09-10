import { useState } from "react"
import personService from '../services/person'

const Form = ( {persons, state} ) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    // check if person already exists in phonebook
    if (persons.some(e =>  e.name === newName)) (
      alert(`${newName} is already added to phonebook`)
    )
    else 
    personService
    .create(nameObject)
    .then((response => {
      state(persons.concat(nameObject))
      setNewName("")
      setNewNumber("")
    }))
  }
  
  return (
        <div>
          <h2>add a new</h2>
        <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
      )
}

export default Form