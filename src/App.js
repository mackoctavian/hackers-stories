import React from 'react';



function App() {

  const stories = [
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
      objectID:1,
    },
  ];

  const [searchTerm, setSearchTearm] = React.useState('');

  const handleChange = event => {
    setSearchTearm(event.target.value);
  }
  return (
    <div>
      <h1>My Hackers Stories</h1>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange}></input>
      <p>Searching for <strong>{searchTerm}</strong></p>

      <hr></hr>
      <List list={stories}/>
    </div>
  )
}

function List(props) {
  return (
    <div>
      {
        props.list.map(item => 
          (<div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
          )
        )
      }
    </div>
  )
}

export default App;
