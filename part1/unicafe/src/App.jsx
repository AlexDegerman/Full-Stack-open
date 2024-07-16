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
  switch (true) {
    case (total > 0):
  return (
    <div>
      <StatisticLine text="good" value={stats.value[0]}/>
      <StatisticLine text="neutral" value={stats.value[1]}/>
      <StatisticLine text="bad" value={stats.value[2]}/>
      <StatisticLine text="all" value={stats.value[0] + stats.value[1] + stats.value[2]}/>
      <StatisticLine text="average" value={stats.value[3] / total}/>
      <StatisticLine text="positive" value={stats.value[0] / total * 100 + " %"}/>
    </div>
  )
  default:
    return (
    <div>
      No feedback given
    </div>
    )
}
}

const StatisticLine = ({text, value}) => (
  <p>{text} {value} </p>
)

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
        break
      case 'neutral':
        setNeutral(value)
        break
      case 'bad':
        setBad(value)
        setPoints(points - 1)
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