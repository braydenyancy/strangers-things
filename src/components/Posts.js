import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {

  const [searchTerm, setSearchTerm] = useState('');

  function postMatches(post, text) {
    const { title, description, price, location} = post;
    if (!searchTerm) return true;
    return post.title.includes(text)
  }

  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  useEffect(()=> {
  }, [searchTerm])

  useEffect(()=> {
  }, [posts])

  return (

    <div id='postsDiv'>
        <input
          id="searchBar"
          type='text'
          placeholder='Search'
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
        <button id="searchButton" type='submit'>Search</button>
      {
        postsToDisplay.map((post) => {
          const { description, location, price, title, _id, isAuthor, author } = post;
          return (
            <div key={_id}>
              <h3 id="postTitle">{title}</h3>
              <p id="authorName">Author: {author.username}</p>
              <p>Description: {description}</p>
              <p>Price: {price}</p>
              <p>Location: {location}</p>
              {
                isAuthor ? (
                  <>
                    <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                    <Link to={`/posts/${_id}`}>View</Link>
                  </>
                ) : (
                  <Link to={`/posts/${_id}`}>View</Link>
                )
              }
            </div>
          )
        })
      }

    </div>
  )
}

export default Posts;