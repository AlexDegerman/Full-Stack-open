import { useEffect, useState } from 'react'
import Person  from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFilter] = useState(persons)

    useEffect(() => {
      personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      }) 
      },[])
    
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