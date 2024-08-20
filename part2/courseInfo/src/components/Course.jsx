const Header = ({ course }) => <h2>{course.name}</h2>

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
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total sum={course.parts}/>
    </div>
  )
}

export default Course