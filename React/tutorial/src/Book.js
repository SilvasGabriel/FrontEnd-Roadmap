import React from 'react'

const Book = (props) => {
    const {img, title, author} = props
    
    //atributo, eventHandler
    //onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello world!')
    }

    const complexExample = (author) => {
        console.log(author)
    }

    return (
        <article className='book' onMouseOver={()=>{
            console.log(title);
        }}>
             <img src={img} alt=""/>
             <h1>{title}</h1>
             {/*<h1 onClick={ ()=>console.log(title) }>{title}</h1>*/}
             <h4 >{author}</h4>
             <button type="button" onClick={clickHandler}>Example</button>
             <button type="button" onClick={ () => complexExample(author)}>More Complex Example</button>

            {/*<img src={props.img} alt=""/>
             <h1>{props.title}</h1>
             <h4 >{props.author}</h4>
            */}

            {/*<p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.number}</p>*/}
            {/*<p>{let x = 6}</p> Assim que se comenta em JSX*/}
            {/*<p>{6 + 6}</p>*/}
        </article>
    )
}

export default Book