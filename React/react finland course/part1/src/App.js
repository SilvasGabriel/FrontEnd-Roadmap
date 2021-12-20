import React from 'react'

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = (props) => {

  //Desestruturando uma propriedade para acessar o valor
  const {name, exercises} = props

  return (
    <p>
      {name} {exercises}
    </p>
  )

}

const Content = ({ parts }) => {

  const [part1, part2, part3] = parts

  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </div>
  )

}

const Total = (props) => {

  return (
    <div>
      <p>Numbers of exercises { props.parts[0]["exercises"] +
        props.parts[1]["exercises"] +
        props.parts[2]["exercises"] }</p>
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

      <Header course={course} />
      <Content parts={course.parts} />
      <Total  parts={course.parts}/>

      {/* 
          <Content parts={{part1: part1, part2: part2, part3: part3, exercises1: exercises1, exercises2: exercises2, exercises3: exercises3,}}/>
          <Total total={{exercises1: exercises1, exercises2: exercises2, exercises3: exercises3}}/>
      */}

    </div>
  )
}

export default App
