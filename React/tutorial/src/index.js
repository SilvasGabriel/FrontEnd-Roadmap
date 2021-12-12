import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css'; 

import {books} from './books'

import Book from './Book'
//Variaveis
//1° Forma
/*
const title = 'Dog Man: Grime and Punishment: From the Creator of Captain Underpants'
const author = 'Dav Pilkey'
const img = 'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg'
*/

//2°Forma
/*
const firstbook = {
    img:'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
    title:'Dog Man: Grime and Punishment: From the Creator of Captain Underpants',
    author:'Dav Pilkey'
}

const secondbook = {
    img:'https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg',
    title:'Untamed',
    author:'Glennon Doyle'
}
*/

//3°Forma
/*const books = [
    {
        id: 1,
        img:'https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg',
        title:'Dog Man: Grime and Punishment: From the Creator of Captain Underpants',
        author:'Dav Pilkey'
    },
    {
        id: 2,
        img:'https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg',
        title:'Untamed',
        author:'Glennon Doyle'
    },
    {   id: 3,
        img:'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
        title:'Greenlights',
        author:'Matthew McConaughey'
    },
    
]*/

//Componente Principal
//2° Forma
/*
function BookList(){
    return (
        <section className='booklist'>
           <Book img={firstbook.img} title={firstbook.title} author={firstbook.author} />
           <Book  img={secondbook.img} title={secondbook.title} author={secondbook.author} />
        </section>
    )    
}
*/

//3°Forma
function BookList(){
    return (
        <section className='booklist'>
            {books.map((book)=>{
                return(
                    <Book key={book.id} {...book}></Book>
                )
                
            })}
        </section>
    )    
}


//1° Forma 
/*
const Book = () => {
    return (
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    )
}

const Image = () => (
    <img src="https://images-na.ssl-images-amazon.com/images/I/71c1LRLBTBL._AC_UL200_SR200,200_.jpg" alt=""
    />
)

const Title = () => <h1>Dog Man: Grime and Punishment: From the Creator of Captain Underpants</h1>

const Author = () => <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}} >Dav Pilkey</h4> 

*/

//2°Forma
/*
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
             {/*<h1 onClick={ ()=>console.log(title) }>{title}</h1>}
            /*<h4 >{author}</h4>
             <button type="button" onClick={clickHandler}>Example</button>
             <button type="button" onClick={ () => complexExample(author)}>More Complex Example</button>

            {/*<img src={props.img} alt=""/>
             <h1>{props.title}</h1>
             <h4 >{props.author}</h4>
            }

            /*
            {/*<p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.number}</p>}
            /*{/*<p>{let x = 6}</p> Assim que se comenta em JSX}
            /*{/*<p>{6 + 6}</p>}
        /*</article>
    )
}
*/

ReactDom.render(<BookList />, document.getElementById('root'))
