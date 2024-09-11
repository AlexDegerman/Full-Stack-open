const Person = ({ person, deleteId }) => {
  return (
    <li>{person.name} {person.number} <button onClick={() => deleteId(person.id)} >delete</button></li>
  )
}

export default Person