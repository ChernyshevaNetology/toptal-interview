import React from "react";
import Application from "./Starter";

function App() {
  return (
    <div className="App">
      <Application />
    </div>
  );
}

export default App;

/*
* import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [posts, setPosts] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPageCount, setTotalPageCount] = useState(10)
  const baseUrl = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`

  const fetchPosts = async () => {
    const data = await fetch(baseUrl)
    const totalPosts = Number(data.headers.get('x-total-count'))
    const totalPageCount = Math.round(totalPosts / 5)
    console.log(totalPageCount)
    setTotalPageCount(totalPageCount)
    const posts = await data.json()
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [currentPage])


  return (
    <div className="App">
      {posts && posts.map(({ body, id, title}) => (
        <div key={id}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      ))}
      {totalPageCount && (
          [...new Array(totalPageCount+1).keys()].slice(1).map(el => (
              <a onClick={() => setCurrentPage(el)} key = {el}>{el}</a>
          ))
      )}
    </div>
  );
}

export default App;

* */
