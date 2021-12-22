import React from 'react'

const StatisticLine = (props) => {
    
    const {name, valor} = props

    //console.log(props)
 
    return (
        <tr>
            <td>{name}: </td>
            <td>{valor}</td>
        </tr>
    )
}

export default StatisticLine
