import React from 'react'

//Componentes 
 import Part from './Part'

const Content = ({course}) => {
    
    return (
        <div> 
            <Part courses={course}/>
        </div>
    )
}

export default Content
