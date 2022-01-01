import React, {useState} from "react";

//Importando Componentes
import List from "./Componentes/List";
import Search from "./Componentes/Search";

const title = "React";

const welcome = {
  greeting: "Hey",
  name: "Luzia",
};

function getFood(food) {
  return food;
}

const App = () => {

  const stories = [
    {
      header: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      header: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const storiesSearched = stories.filter(story => 
        story.header.toLowerCase()
                    .includes(searchTerm.toLowerCase()))
  

  return (
    <div>
      <h1>Hello World</h1>
      <h2>This is a {title} application.</h2>
      <h3>
        {welcome.greeting} {welcome.name} good to see you there!
      </h3>
      <h4>Your favourite fruit is {getFood("Apple")} right?</h4>

      <h1>My Hacker Stories</h1>

      <Search onSearch={handleChange} searchTerm={searchTerm}/>

      <hr />

      <List list={storiesSearched}/>

    </div>
  )
}

export default App;
