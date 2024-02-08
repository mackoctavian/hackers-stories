import React from "react";


const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(localStorage.getItem('key') || initialState);

  React.useEffect(() => {
    localStorage.setItem('key', value)
  }, [key, value])

  return [value, setValue]
} 

function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 3,
      points: 4,
      objectID: 1,
    },
  ];

  
  const [searchTerm, setSearchTearm] = useSemiPersistentState('search', 'React');
  
  const handleSearch = (event) => {
    setSearchTearm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>My Hackers Stories</h1>
      <InputWithLabel id="search" label="search" value={searchTerm} onInputChange={handleSearch} type="text"></InputWithLabel>
      <hr></hr>
      <List list={searchedStories} />
    </div>
  );
}

const List = ({list}) => {
  return (
    <div>
      {list.map(({objectID,...item}) => <Item key={objectID} {...item}></Item>)}
    </div>
  )
}

const Item = ({title, url, author, num_comments, points}) => {
  return(
    <div>
      <span><a href={url}>{title}</a></span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </div>
  )
}

const InputWithLabel = ({ id,label,value, onInputChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      &nbsp;
      <input id={id} type='text' onChange={onInputChange} value={value}></input>
    </div>
  );
};

export default App;
