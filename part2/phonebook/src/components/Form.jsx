import { useState } from "react"
import personService from '../services/person'
import Notification from "./Notification"

const Form = ( {persons, setPersons, setNotification, notification} ) => {
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
    if (persons.some(e =>  e.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.find(e => e.name === newName)
          setNotification(`Updated ${newName} 's number`)
          setTimeout(() => {
          setNotification(null)
          }, 5000)
        personService.update(id.id,nameObject)
        // todo: make page update when updating
      }
  }
    else {
      setNotification(`Added ${newName}`)
      setTimeout(() => {
      setNotification(null)
      }, 5000)
      personService
      .create(nameObject)
      .then((response => {
      setPersons(persons.concat(nameObject))
      nameObject.id = response.data.id
      setNewName("")
      setNewNumber("")
      console.log(`added ${nameObject.id}`)
    }))
  }}
  
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