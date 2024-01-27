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
  
  const [searchTerm, setSearchTearm] = React.useState('')
  const handleSearch = event => {
    setSearchTearm(event.target.value)
  }
  
  const searchedStories = stories.filter(story => story.title.includes(searchTerm.toLocaleLowerCase()))

  return (
    <div>
      <h1>My Hackers Stories</h1>
      <Search onSearch={handleSearch}/>
      <hr></hr>
      <List list={searchedStories}/>
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

const Search = props => {

  return (
    <div>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' onChange={props.onSearch}></input>
    </div>
  )
}

export default App;
