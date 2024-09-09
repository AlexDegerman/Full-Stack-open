import { useState } from 'react'
import Name  from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { content: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }
    if (persons.some(e =>  e.content === newName)) (
      alert(`${newName} is already added to phonebook`)
    )
    else 
    setPersons(persons.concat(nameObject))
    setNewName("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(name => 
          <Name key={name.name} name={name}/>
        )}
      </ul>
    </div>
    
  )
}

export default App