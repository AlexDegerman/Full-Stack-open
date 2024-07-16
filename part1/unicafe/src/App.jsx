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
  return (
    <div>
      <p>good {stats.value[0]}</p>
      <p>neutral {stats.value[1]}</p>
      <p>bad {stats.value[2]}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setValue = (type, value) => {
    switch (type) {
      case 'good':
        console.log('good now', value)
        setGood(value);
        break
      case 'neutral':
        console.log('neutral now', value)
        setNeutral(value);
        break
      case 'bad':
        console.log('bad now', value)
        setBad(value);
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
      <Statistics value = {[good, neutral , bad]}/>
    </div>
  )
}

export default App