const Filter = ( {state, search}) => {
  const handleSearch = (event) => {
    state(event.target.value)
  }
  return (
<div>filter shown with<input value={search}onChange={handleSearch}/></div>
  )
}

export default Filter