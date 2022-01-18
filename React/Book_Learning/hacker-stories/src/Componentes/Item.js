import React from 'react'

const Item = ({item, onRemoveItem}) => {

    return (
        <div key={item.objectID}>
            <h1>Tecnologia</h1>
            <span>
              <a href={item.url}>{item.header}</a>
            </span>
            <h2>Author: {item.author}</h2>
            <h3>Comments: {item.num_comments}</h3>
            <h4>Points: {item.points}</h4>
            <button 
            type="button"
            onClick={() => onRemoveItem(item)}
            >
              Dissmiss
            </button>
          </div>
    )
}

export default Item
