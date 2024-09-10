import { useEffect, useState } from 'react'
import Person  from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [search, setSearch] = useState('')
  const [filtered, setFilter] = useState(persons)

    useEffect(() => {
      setFilter(persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  )}, [search, persons])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} state={setSearch} />
      <Form persons={persons} state={setPersons} />
      <h2>Numbers</h2>
      <ul>
        {filtered.map(person => 
          <Person key={person.name} person={person}/>
        )}
      </ul>
    </div>
    
  )
}

export default App