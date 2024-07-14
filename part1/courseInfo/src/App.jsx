
const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = (parts) => {
  return (
    <div>
      <p>{parts.part1}</p>
      <p>{parts.part2}</p>
      <p>{parts.part3}</p>
    </div>
  )
}

const Total = (exercises) => {
  return (
    <div>
      <p>{exercises.exercises1}</p>
      <p>{exercises.exercises2}</p>
      <p>{exercises.exercises3}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
    
  )
}

export default App