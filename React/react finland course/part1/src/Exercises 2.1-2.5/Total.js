import React from 'react'

const Total = ({ course }) => {

    const total = course.reduce((valorPassado,valorAtual) => valorPassado + valorAtual.exercises, 0)

    return (
        <div>
            <p><strong>total of {total} exercises</strong></p>
        </div>
    )
}

export default Total
