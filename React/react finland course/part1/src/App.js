import React,{useState} from 'react'

//Componentes
import Title from './Exercises 1.6-1.11/Title'
import Button from './Exercises 1.6-1.11/Button'
import Statistics from './Exercises 1.6-1.11/Statistics'

const App = () => {
    
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const handleClickGood = () =>{
        setGood(good + 1)
    }

    
    const handleClickNeutral = () =>{
        setNeutral(neutral + 1)
    }

    const handleClickBad = () =>{
        setBad(bad + 1)
    }

    return (

        <div>
            <Title title="Give Feedback"/>
            
            <Button name="Good"  handleClick={handleClickGood} />

            <Button name="Neutral" handleClick={handleClickNeutral} />

            <Button name="Bad"  handleClick={handleClickBad}/>
            
            <Title title="Statistics" />

            <Statistics good={good} neutral={neutral} bad={bad}/>

           
        </div>
    )
}

export default App
