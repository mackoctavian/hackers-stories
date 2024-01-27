import React from "react";

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

  const [searchTerm, setSearchTearm] = React.useState('');
  const handleSearch = (event) => {
    setSearchTearm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>My Hackers Stories</h1>
      <Search onSearch={handleSearch} search={searchTerm} />
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

const Item = ({objectID, title, url, author, num_comments, points}) => {
  return(
    <div>
      <span><a href={url}>{title}</a></span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </div>
  )
}

const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} value={search}></input>
    </div>
  );
};

export default App;
