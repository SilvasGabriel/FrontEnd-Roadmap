import React from 'react'

const PersonForm = ({newName,newNumber,onChangName,onChangNumber,onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={newName} onChange={onChangName} />
            </div>
            <div>
                number: <input value={newNumber} onChange={onChangNumber} />
            </div>
            <div>
                <br /><button type='submit'>add</button>
            </div>
        </form>
    )
}

export default PersonForm
