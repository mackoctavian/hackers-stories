import React from 'react';

const list = [
  {
    title: 'React',
    url: "https://reactjs.org",
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID:0,
  },
  {
    title: 'Redux',
    url: "https://redux.js.org",
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 3,
    points: 4,
    objectID:0,
  },
];

function App() {
  return (
    <div>
      <h1>My Hackers Stories</h1>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text'></input>

      <hr></hr>
      <List />
    </div>
  )
}

function List() {
  return (
    <div>
      {
        list.map(function(item){
          return <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        })
      }
    </div>
  )
}

export default App;
