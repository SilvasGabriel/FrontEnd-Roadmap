import React from "react";

const title = "React";

const welcome = {
  greeting: "Hey",
  name: "Luzia",
};

function getFood(food) {
  return food;
}

const list = [
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

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>This is a {title} application.</h2>
      <h3>
        {welcome.greeting} {welcome.name} good to see you there!
      </h3>
      <h4>Your favourite fruit is {getFood("Apple")} right?</h4>

      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      {list.map((item) => {
        return (
          <div key={item.objectID}>
            <h1>Tecnologia</h1>
            <span>
              <a href={item.url}>{item.header}</a>
            </span>
            <h2>Author: {item.author}</h2>
            <h3>Comments: {item.num_comments}</h3>
            <h4>Points: {item.points}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default App;
