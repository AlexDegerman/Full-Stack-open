const Filter = ( {setSearch, search}) => {
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
<div>filter shown with<input value={search}onChange={handleSearch}/></div>
  )
}

export default Filter