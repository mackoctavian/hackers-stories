import React from "react";


const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(localStorage.getItem('key') || initialState);

  React.useEffect(() => {
    localStorage.setItem('key', value)
  }, [key, value])

  return [value, setValue]
} 

function App() {
  const initialStories = [
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

  const [stories, setStories] = React.useState(initialStories)

  const handleRemoveStory = item => {
    const newStories = stories.filter(
      story => item.objectID !== story.objectID
    )
    setStories(newStories)
  }

  
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
      <InputWithLabel id="search"  value={searchTerm} onInputChange={handleSearch} isFocused type="text">Search</InputWithLabel>
      <hr></hr>
      <List list={searchedStories} onRemoveItem={handleRemoveStory}/>
    </div>
  );
}

const List = ({list, onRemoveItem}) => {
  return (
    <div>
      {list.map(item => <Item key={item.objectID} onRemoveItem={onRemoveItem} item={item}></Item>)}
    </div>
  )
}

const Item = ({item, onRemoveItem}) => {
  const handleRemoveItem = () => {
    onRemoveItem(item)
  }
  return(
    <div>
      <span><a href={item.url}>{item.title}</a></span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type="button" onClick={handleRemoveItem}>Dismiss</button>
      </span>
    </div>
  )
}

const InputWithLabel = ({ id,value, onInputChange, children, isFocused }) => {
  const inputRef = React.useRef()
  React.useEffect(() => {
    if (isFocused && inputRef.current){
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <div>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input ref={inputRef} id={id} type='text' onChange={onInputChange} value={value}></input>
    </div>
  );
};

export default App;
