import React from 'react'

//Componentes
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {

    //Foi adicionado o parts na propriedade pois assim pegamos somente os array de parts que tem exercicios e o nome.

    return (
        <div>
            <Header course={course} /> 
            <Content course={course.parts}/>
            <Total course={course.parts} />       
        </div>
    )
}

export default Course
