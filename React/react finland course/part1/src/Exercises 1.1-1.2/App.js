import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = ({parts}) =>{
  return (
    <div>
      <Part part={parts.part1} exercises={parts.exercises1}/>
      <Part part={parts.part2} exercises={parts.exercises2}/>
      <Part part={parts.part3} exercises={parts.exercises3}/>
    </div>
  )
}

const Total = ({total}) => {
  
  return(
    <div>
      <p>Numbers of exercises {total.exercises1 + total.exercises2 + total.exercises3}</p>
    </div>
  )

}

const App = () => {

  const course = 'Half stack aplication development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>

      <Header course={course} />
      <Content parts={{part1, part2, part3, exercises1, exercises2, exercises3}}/>
      <Total total={{exercises1, exercises2, exercises3}}/>
      
      {/* 
          <Content parts={{part1: part1, part2: part2, part3: part3, exercises1: exercises1, exercises2: exercises2, exercises3: exercises3,}}/>
          <Total total={{exercises1: exercises1, exercises2: exercises2, exercises3: exercises3}}/>
      */}
      
    </div>
  )
}

export default App
