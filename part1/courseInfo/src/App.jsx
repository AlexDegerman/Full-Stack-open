
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
      <Part part={parts.part1} exercise={parts.exercise1}/>
      <Part part={parts.part2} exercise={parts.exercise2}/>
      <Part part={parts.part3} exercise={parts.exercise3}/>
    </div>
  )
}

const Part = ({part, exercise}) => {
  return (
    <div>
      <p>{part} {exercise}</p>
    </div>
  )
}

const Total = (exercises) => {
  return (
    <div>
      <p>Number of exercises {exercises.exercise1 + exercises.exercise2 + exercises.exercise3}</p>
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
      <Content part1={part1} part2={part2} part3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
    </div>
    
  )
}

export default App