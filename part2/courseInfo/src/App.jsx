const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => {
  const total = sum.reduce((a, current) => a + current.exercises, 0)
  return (
  <p>
    Total of {total} exercises
  </p>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return parts.map(part =>
    <Part key={part.id} part={part}></Part>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Content parts={course}></Content>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Course course={course.parts}/>
      <Total sum={course.parts}/>
    </div>
  )
}

export default App