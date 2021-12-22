import React from 'react'

const Button = (props) => {

    const {name, handleClick} = props
    
    //console.log(props)

    return (
            <button style={{margin: '5px'}}
            onClick={handleClick}
            >
                {name}
            </button>
    )
}

export default Button
