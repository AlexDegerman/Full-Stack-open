import { useEffect, useState } from 'react'
import Person  from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'
import personService from './services/person'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFilter] = useState(persons)
  const [notification, setNotification] = useState(null)

    const deleteId = (id) => {
      const person = persons.find(p => p.id === id)
      const changedPerson = {...person}
      if (window.confirm(`Delete ${changedPerson.name} ?`)) {
        personService.deleteId(changedPerson.id)
      .catch(err => {
        alert(`the person ${changedPerson.name} was already deleted from server`)
        // todo: make page update when deleting
    })}fetchData()}

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
      <Notification message={notification}/>
      <Filter search={search} setSearch={setSearch} />
      <Form persons={persons} setPersons={setPersons} setNotification={setNotification} notification={notification} />
      <h2>Numbers</h2>
      <ul>
        {filtered.map(person => 
          <Person key={person.name} person={person} deleteId={deleteId} />
        )}
      </ul>
    </div>
  )
}

export default App