
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises}/>
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises}/>
    </div>
    
  )
}

export default App