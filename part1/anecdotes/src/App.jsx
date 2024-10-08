import { useState } from 'react'

const Header = (title) => {
  return (
    <h1> {title.title} </h1>
  )
}

const Button = ( button ) => {
  return (
      <button onClick={button.handleClick}>
      {button.text}
  </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const points = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0}
  const [votes, setVote] = useState(points)
  const [winner, setWinner] = useState(0)

  const setAnecdote = () => {
    const random =  Math.floor(Math.random() * (Math.floor(8) - Math.ceil(1)) + Math.ceil(1))
    setSelected(random)
  }

  const addVote = () => {
    const newVotes = { ...votes }
    newVotes[selected] += 1
    setVote(newVotes)
    if (newVotes[selected] > votes[winner])
      setWinner(selected)
  }

  return (
    <div>
      <Header title="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={() => addVote()} text="vote"/> 
      <Button handleClick={() => setAnecdote()} text="next anecdote"/> 
      <Header title="Anecdote with the most votes"/>
      <p>{anecdotes[winner]} </p>
      <p>has {votes[winner]}</p>
    </div>
  )
}

export default App