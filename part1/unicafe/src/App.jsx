import { useState } from 'react'

const Title = ({ title }) => {
  return (
  <div>
    <h1> { title }</h1>
  </div>
)
}

const Button = ( button ) => {
  return (
      <button onClick={button.handleClick}>
    {button.text}
  </button>
  )
}

const Statistics = ( stats ) => {
  const total = stats.value[0] + stats.value[1] + stats.value[2]
  return (
    <div>
      <p>good {stats.value[0]}</p>
      <p>neutral {stats.value[1]}</p>
      <p>bad {stats.value[2]}</p>
      <p>all {stats.value[0] + stats.value[1] + stats.value[2]} </p>
      <p>average {stats.value[3] / total}</p> 
      <p>positive {stats.value[0] / total * 100 + " %" } </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [points, setPoints] = useState(0)

  const setValue = (type, value) => {
    switch (type) {
      case 'good':
        setGood(value)
        setPoints(points + 1)
        console.log('average now', points)
        break
      case 'neutral':
        setNeutral(value)
        console.log('average now', points)
        break
      case 'bad':
        setBad(value)
        setPoints(points - 1)
        console.log('average now', points)
        break
    }
  };

  return (
    <div>
      <Title title = "give feedback"/>
      <Button handleClick={() => setValue('good', good + 1)} text="good"/> 
      <Button handleClick={() => setValue('neutral',neutral + 1)} text="neutral"/> 
      <Button handleClick={() => setValue('bad',bad + 1)} text="bad"/> 
      <Title title = "statistics"/>
      <Statistics value = {[good, neutral , bad, points]}/>
    </div>
  )
}

export default App