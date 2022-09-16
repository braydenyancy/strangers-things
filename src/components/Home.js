import React from 'react';
import { Link } from 'react-router-dom';


const Home = ( {token} ) => {
  return (
    <div>
      <h1 id="strangerTitle">Stranger's Things</h1>
      <p id="homeDescription">An Everyday selling platform!</p>
      {token ? (
      <Link id="addPost" to='/posts/create-post'>Add a Post</Link>
      ) 
      : null } 
    </div>
  )
}

export default Home;