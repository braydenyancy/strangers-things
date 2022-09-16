import React, { useState } from 'react';
import { createPost } from '../api';

const CreatePost = ({ token, fetchPosts, navigate }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('')
  const [delivery, setDelivery] = useState(null)

  async function addPost() {
    const newPost = {
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: delivery
    }
    await createPost(token, newPost)
    fetchPosts();
    navigate(`/posts`)
  }

  return (
    <>
    <h1 id="formTitle">Create A New Post</h1>
    <form
      id="postForm"
        onSubmit={(event) => {
        event.preventDefault();
        addPost();
      }}>
      <input
      id="postTitle"
        type='text'
        placeholder='Title of your Post'
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
      id="postDescription"
        type='text'
        placeholder='Enter Description'
        onChange={(event) => setDescription(event.target.value)}
      />
      <input 
      id="postPrice"
        type='text'
        placeholder='Your Price'
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
      id="postLocation"
        type='text' 
        placeholder='Enter Location'
        onChange={(event) => setLocation(event.target.value)}
      />
      <p id="canDeliver">Can Deliver?</p>
      <input
      id="postBox"
        type='checkbox'
        name='Can Deliver'
        onChange={(event) => setDelivery(event.target.value)}
      />
      <button id="submitPost" type='submit'>Create a New Post</button>
    </form>
  </>
    // This needs to be a form that accepts the 5 request parameters for creating a post
  )
}

export default CreatePost;