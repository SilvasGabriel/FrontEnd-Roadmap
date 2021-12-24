import React from 'react'

const Part = ({ courses }) => {

    return (
        <div>
           
           {courses.map(name => 

                <p key={name.id}>
                    {name.name} {name.exercises}
                </p>
            )}
           
        </div>
    )
}

export default Part
