const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts.parts[0].name} exercise={parts.parts[0].exercises}/>
      <Part part={parts.parts[1].name} exercise={parts.parts[1].exercises}/>
      <Part part={parts.parts[2].name} exercise={parts.parts[2].exercises}/>
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

const Total = ({exercises}) => {
  return (
    <div>
      <p>Number of exercises {exercises.parts[0].exercises + exercises.parts[1].exercises + exercises.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total exercises={course}/>
    </div>
  )
}

export default App